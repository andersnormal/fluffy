import { promisify } from 'util'
import { warning } from './log'
import Config from '../config'
import * as fs from 'fs'

const chmod = promisify(fs.chmod)

export default async (config: Config) => chmod(config.socket, config.mode).catch(err => { warning(err) })
