import Config from './config'
import cleanup from './utils/cleanup'
import { log } from './utils/log'
import * as Koa from 'koa'
import * as Router from 'koa-router'
import access from './utils/access'
import * as gracefulShutdown from 'http-graceful-shutdown'

export default class Server {
  public router
  public listener

  constructor(public config: Config, public renderer, public app?: Koa) {
    // attach a new Koa app
    this.app = this.app || new Koa()

    // set app silent
    this.app.silent = true
  }

  public async setup() {
    // cleanup
    await cleanup(this.config)

    // config router
    this.router = new Router()

    // config renderer route
    this.router.all('*', this.renderer.middleware())
  }

  public async start() {
    // setup
    await this.setup()

    this.app // config app
      .use(this.router.routes())
    // .use(this.router.allowedMethods())

    // attach server
    this.listener = this.app.listen(this.config.socket)

    // verbose
    log(`listening on: ${this.config.socket}`)

    // mode
    await access(this.config)

    // register graceful shutdown
    gracefulShutdown(this.listener, {
      signals: 'SIGINT SIGTERM',
      timeout: 30 * 1000,
      onShutdown: cleanup.bind(this, this.config),
      finally: function () {
        log(`Server gracefully shut down ...`)
      }
    })
  }
}
