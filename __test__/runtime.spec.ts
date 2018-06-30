import Runtime from '../src/runtime'
import { env } from 'process'

beforeEach(() => {
  jest.resetModules()
  // The object returned act like a promise, so return it to wait until the process is done
});

describe('Runtime', () => {
  let runtime: Runtime

  beforeEach(() => {
    runtime = new Runtime()
  })

  test('it should provide development', async () => {
    expect(runtime).toBeInstanceOf(Runtime)
    expect(runtime).toHaveProperty('Development')
    expect(runtime.Development).toBeFalsy()
  })

  test('it should provide deve', async () => {
    expect(runtime).toBeInstanceOf(Runtime)
    expect(runtime).toHaveProperty('Production')
    expect(runtime.Production).toBeFalsy()
  })
})
