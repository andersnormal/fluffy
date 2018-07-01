import {
  FLUFFY_SOCKET,
  FLUFFY_BUNDLE,
  FLUFFY_MANIFEST,
  FLUFFY_TEMPLATE,
  FLUFFY_PORT
} from './runtime'

import { resolve } from './utils/path'

export type Args = {
  socket?: string
  mode?: string
  bundle?: string
  manifest?: string
  template?: string
  timeout?: number
  port?: string
  webpack?: string
  dev?: boolean
  noEmit?: boolean
}

export default class Config {
  private _socket = '/tmp/fluffy.sock'
  private _mode = '0666'
  private _manifest: string
  private _bundle: string
  private _template: string
  private _timeout = 60 * 1000
  private _port: string
  private _noEmit = false
  private _dev = false
  private _webpack: string

  public get socket() {
    return this._socket
  }

  public get mode() {
    return this._mode
  }

  public get manifest() {
    return this._manifest
  }

  public get bundle() {
    return this._bundle
  }

  public get template() {
    return this._template
  }

  public get timeout() {
    return this._timeout
  }

  public get port() {
    return this._port
  }

  public get noEmit() {
    return this._noEmit
  }

  public get webpack() {
    return this._webpack
  }

  public get dev() {
    return this._dev
  }

  constructor({
    socket,
    mode,
    bundle,
    webpack,
    noEmit,
    dev,
    manifest,
    port,
    template,
    timeout
  }: Args) {
    this._socket = socket || FLUFFY_SOCKET || this._socket
    this._mode = mode || this._mode
    this._bundle = bundle || FLUFFY_BUNDLE || this._bundle
    this._manifest = manifest || FLUFFY_MANIFEST || this.manifest
    this._template = template || FLUFFY_TEMPLATE || this._template
    this._timeout = timeout * 1000 || this._timeout
    this._port = port || FLUFFY_PORT || this.port
    this._webpack = webpack || this.webpack
    this._noEmit = noEmit || this._noEmit
    this._dev = dev || this._dev

    // resolve paths
    this._manifest = resolve(this._manifest)
    this._bundle = resolve(this._bundle)
    this._template = resolve(this._template)
  }
}
