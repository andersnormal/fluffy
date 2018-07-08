import Context from '../src/context'
import * as MockReq from 'mock-req'

beforeEach(() => {
  jest.resetModules()
  // The object returned act like a promise, so return it to wait until the process is done
});

describe('Context', () => {
  let context: Context

  const headers = {
    'Accept': 'text/html'
  }

  beforeEach(() => {
    const req = new MockReq({
      methods: 'GET',
      url: '/test',
      headers
    })
    context = new Context(req)
  })

  test('it should provide the request url', async () => {
    expect(context).toBeInstanceOf(Context)
    expect(context).toHaveProperty('url')
    expect(context.url).toBeDefined()
    expect(context.url).toEqual('/test')
  })

  test('it should provide the request methods', async () => {
    expect(context).toBeInstanceOf(Context)
    expect(context).toHaveProperty('url')
    expect(context.methods).toBeDefined()
    expect(context.methods).toEqual('GET')
  })

  test('it should provide the request headers', async () => {
    expect(context).toBeInstanceOf(Context)
    expect(context).toHaveProperty('url')
    expect(context.headers).toBeDefined()
    expect(context.headers).toMatchObject({ 'accept': 'text/html' })
  })
})
