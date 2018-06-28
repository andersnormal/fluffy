import leftover from './leftover'
import { error } from './log'
import { exit } from 'process'
import Config from '../config'

export default async (config: Config) => {
  try {
    await leftover(config.socket)
  } catch (e) {
    error(e); exit(1)
  }
}
