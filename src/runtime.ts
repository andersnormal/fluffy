import Environment from './env'
import { env } from 'process'

export const {
  NODE_ENV,
  FLUFFY_SOCKET,
  FLUFFY_BUNDLE,
  FLUFFY_MANIFEST,
  FLUFFY_TEMPLATE,
  FLUFFY_PORT
} = env

export default class Runtime {
  public get Development(): boolean {
    return NODE_ENV === Environment.Development
  }

  public get Production(): boolean {
    return NODE_ENV === Environment.Production
  }
}
