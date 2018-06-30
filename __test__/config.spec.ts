import Config from '../src/config'

beforeEach(() => {
  jest.resetModules()
  // The object returned act like a promise, so return it to wait until the process is done
});

describe('Default Config', () => {
  let config: Config

  beforeEach(() => {
    config = new Config({})
  })

  test('it should provide a default socket', async () => {
    expect(config).toBeInstanceOf(Config)
    expect(config).toHaveProperty('socket')
    expect(config.socket).toEqual('/tmp/fluffy.sock')
  })

  test('it should provide a default mode', async () => {
    expect(config).toBeInstanceOf(Config)
    expect(config).toHaveProperty('mode')
    expect(config.mode).toEqual('0666')
  })

  test('it should provide a default timeout mode', async () => {
    expect(config).toBeInstanceOf(Config)
    expect(config).toHaveProperty('timeout')
    expect(config.timeout).toEqual(60 * 1000)
  })

  test('it should not provide a default manifest', async () => {
    expect(config).toBeInstanceOf(Config)
    expect(config).toHaveProperty('manifest')
    expect(config.manifest).not.toBeDefined()
  })

  test('it should not provide a default bundle', async () => {
    expect(config).toBeInstanceOf(Config)
    expect(config).toHaveProperty('bundle')
    expect(config.bundle).not.toBeDefined()
  })

  test('it should not provide a default template', async () => {
    expect(config).toBeInstanceOf(Config)
    expect(config).toHaveProperty('bundle')
    expect(config.bundle).not.toBeDefined()
  })
})
