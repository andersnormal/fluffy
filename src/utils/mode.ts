import { promisify } from 'util'
import * as fs from 'fs'

const chmod = promisify(fs.chmod)

export default async (socket: string, mode = '0666') => chmod(socket, mode).catch(err => { console.log(err) })
