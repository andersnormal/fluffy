import {
  FLUFFY_SOCKET,
  FLUFFY_BUNDLE,
  FLUFFY_MANIFEST,
  FLUFFY_TEMPLATE
} from './runtime'

import { resolve } from './utils/path'

export type Args = {
  socket?: string
  mode?: string
  bundle?: string
  manifest?: string
  template?: string
}

export default class Config {
  private _socket = '/tmp/fluffy.sock'
  private _mode = '0666'
  private _manifest: string
  private _bundle: string
  private _template: string

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

  constructor({ socket, mode, bundle, manifest, template }: Args) {
    this._socket = socket || FLUFFY_SOCKET || this._socket
    this._mode = mode || this._mode
    this._bundle = bundle || FLUFFY_BUNDLE || this._bundle
    this._manifest = manifest || FLUFFY_MANIFEST || this.manifest
    this._template = template || FLUFFY_TEMPLATE || this._template

    // resolve paths
    this._manifest = resolve(this._manifest)
    this._bundle = resolve(this._bundle)
    this._template = resolve(this._template)
  }
}
