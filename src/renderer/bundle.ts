import * as LRU from 'lru-cache'
import Config from '../config'
import { createBundleRenderer } from 'vue-server-renderer'
import { BundleRendererConfig } from './config'
import timeout from '../utils/timeout'
import setHeaders from '../utils/setHeaders'
import Context from '../context'

export default class BundleRenderer {
  public cache
  public renderer
  public config: BundleRendererConfig

  constructor(config: Config) {
    // parse config
    this.config = new BundleRendererConfig(config)

    // create new cache
    this.cache = new LRU({
      max: 100,
      maxAge: 1000 * 60 // 60s
    })

    this.create()
  }

  public create() {
    this.renderer = createBundleRenderer(this.config.bundle, {
      // ...options,
      template: this.config.template,
      cache: this.cache,
      // this is only needed when vue-server-renderer is npm-linked
      basedir: this.config.baseDir,
      // recommended for performance
      runInNewContext: false
    })
  }

  public middleware() {
    return async (ctx, next) => {
      const context = new Context(ctx.req)

      await next() // wait for downstream

      ctx.body = await this.render(ctx, context) // wait for render

      // set headers
      setHeaders(ctx, { 'Content-Type': 'text/html' })
    }
  }

  public async render(ctx, context) {
    const render = new Promise((resolve, reject) => {
      this.renderer.renderToString(context, (err, html) => {
        if (err) {
          reject(err)
        }
        resolve(html)
      }) // wait to render string
    })

    return timeout(60 * 100, render)
      .then(html => html)
      .catch(err => ctx.throw(500, err))
  }
}
