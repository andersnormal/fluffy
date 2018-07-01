import Config from '../config'
import { readFileSync } from 'fs'
import { relative, resolve } from '../utils/path'
import { error } from '../utils/log'
import { exit } from 'process'
import { dirname } from 'path'

export class BundleRendererConfig {
  public template
  public manifest
  public bundle
  public baseDir
  public timeout
  public runInNewContext = false
  public dev = false
  public webpack: string
  public noEmit = false
  public ssrConfig: any
  public devConfig: any

  constructor(config: Config) {
    this.template = config.template
    this.manifest = config.manifest
    this.bundle = config.bundle
    this.timeout = config.timeout
    this.baseDir = !this.bundle || dirname(this.bundle)
    this.dev = config.dev
    this.webpack = config.webpack
    this.noEmit = config.noEmit

    if (this.dev) {
      this.createDev()
    }

    if (!this.dev) {
      this.create()
    }
  }

  public create() {
    try {
      this.bundle = require(relative(this.bundle, __dirname))
      this.manifest = require(relative(this.manifest, __dirname))
      this.template = readFileSync(resolve(this.template), 'utf-8')
    } catch (err) {
      error(err)
      exit(1)
    }
  }

  public createDev() {
    try {
      const { ssrConfig, devConfig } = require(relative(this.webpack, __dirname)).default
      this.ssrConfig = ssrConfig
      this.devConfig = devConfig
    } catch (err) {
      error(err)
      exit(1)
    }
  }
}
