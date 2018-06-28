import Environment from './env'
import { env } from 'process'

export const {
  NODE_ENV,
  FLUFFY_SOCKET,
  FLUFFY_BUNDLE,
  FLUFFY_MANIFEST,
  FLUFFY_TEMPLATE
} = env

export default class Runtime {
  public get Development(): Boolean {
    return NODE_ENV === Environment.Development
  }

  public get Production(): Boolean {
    return !this.Development
  }
}
