import { stat, unlink } from 'fs'

export default async (socket: string) => {
  return new Promise((resolve, reject) => {
    stat(socket, (err) => {
      if (err) {
        resolve()
      }
      unlink(socket, (err) => {
        if (err) {
          // This should never happen.
          reject(err);
        }
        resolve()
      })
    })
  })
}
