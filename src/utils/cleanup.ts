import Config from '../config'
import exit from './exit'
import { promisify } from 'util'
import * as fs from 'fs'

const stat = promisify(fs.stat)
const unlink = promisify(fs.unlink)

export default async (config: Config) =>
  await stat(config.socket)
    .then(() => unlink(config.socket))
    .catch(err => exit(err))
