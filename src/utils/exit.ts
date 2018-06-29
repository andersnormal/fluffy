import { exit } from 'process'
import { error } from './log'

export default (err) => {
  error(err)
  exit(1)
}
