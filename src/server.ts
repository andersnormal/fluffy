import Config from './config'
import cleanup from './utils/cleanup'
import { log } from './utils/log'
import * as Koa from 'koa'
import * as Router from 'koa-router'
import chmod from './utils/chmod'
import * as gracefulShutdown from 'http-graceful-shutdown'

export default class Server {
  public router
  public listener

  constructor(public config: Config, public renderer, public app: Koa) {
    // set app silent
    this.app.silent = true
  }

  public async setup() {
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

    // attach server
    this.listener = this.app.listen(this.config.port || this.config.socket)

    // verbose
    log(`listening on: ${this.config.socket}`)

    // mode
    await chmod(this.config)

    // register graceful shutdown
    gracefulShutdown(this.listener, {
      signals: 'SIGINT SIGTERM',
      timeout: 30 * 1000,
      onShutdown: cleanup.bind(this, this.config),
      finally: () => {
        log(`Server gracefully shut down ...`)
      }
    })
  }
}
