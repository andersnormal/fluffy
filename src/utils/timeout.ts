export default (ms, promise) => {

  // Create a promise that rejects in <ms> milliseconds
  const timeout = new Promise((_resolve, reject) => {
    const id = setTimeout(() => {
      clearTimeout(id)
      reject(`Render timeout in ${ms}`)
    }, ms)
  })

  // Returns a race between our timeout and the passed in promise
  return Promise.race([
    promise,
    timeout
  ])
}
