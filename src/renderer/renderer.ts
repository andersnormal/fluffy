import * as LRU from 'lru-cache'
import Koa from 'koa'
import Context from '../context'

export type RenderFn = (ctx: Koa.Context, context: Context) => Promise<string> | Promise<Error>

export default interface IRenderer<T, U> {
  config: U
  cache: LRU
  renderer: T
  middleware: () => Koa.Middleware
  create: () => void
  render: RenderFn
}
