import cleanup from './utils/cleanup'
import { error } from './utils/log'
import { exit } from 'process'
import mode from './utils/mode'
import create from './utils/create'

export default async (socket: string) => {
  try {
    await cleanup(socket)
  } catch (e) {
    error(e); exit(1)
  }

  create(socket)
  mode(socket)
}
