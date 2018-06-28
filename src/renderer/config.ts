import Config from '../config'
import { readFileSync } from 'fs'
import { relative, resolve } from '../utils/path'
import { error, log } from '../utils/log'
import { exit } from 'process'
import { dirname } from 'path'

export class BundleRendererConfig {
  public template
  public manifest
  public bundle
  public baseDir

  constructor(config: Config) {
    this.template = config.template
    this.manifest = config.manifest
    this.bundle = config.bundle
    this.baseDir = dirname(this.bundle)

    this.create()
  }

  public create() {
    try {
      this.bundle = require(relative(this.bundle, __dirname))
      this.manifest = require(relative(this.manifest, __dirname))
      this.template = readFileSync(resolve(this.template), 'utf-8')
    } catch (err) {
      log(error(err))
      exit(1)
    }
  }
}
