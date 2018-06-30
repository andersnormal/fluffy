import * as argv from 'yargs'

export default class Argv {
  public static version = require('../package.json').version

  public static socket = {
    string: true,
    desc: 'Socket to listen to'
  }
  public static bundle = {
    string: true,
    desc: 'Server bundle (e.g `vue-ssr-server-bundle.json`)'
  }

  public static manifest = {
    string: true,
    description: 'Client manifest (e.g. `vue-ssr-client-manifest.json`)'
  }

  public static template = {
    string: true,
    description: 'Template (e.g. `index.html`)'
  }

  public static mode = {
    string: true,
    description: 'Socket chmod (e.g. `0666`)'
  }

  public static timeout = {
    number: true,
    description: 'Timeout to the render process (e.g. 60s)'
  }

  public static port = {
    number: true,
    description: 'Port to listen to (e.g. 8080)'
  }

  public parseArgs() {
    return argv
      .usage('Usage: $0 [options]')
      .options('socket', Argv.socket)
      .options('bundle', Argv.bundle)
      .options('manifest', Argv.manifest)
      .options('template', Argv.template)
      .options('mode', Argv.mode)
      .version(Argv.version)
      .alias('version', 'v')
      .help('help')
      .alias('help', 'h')
      .argv
  }
}
