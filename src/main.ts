import Config from './config'
import Argv from './argv'
import BundleRenderer from './renderer/bundle'
import Server from './server'

// parse command line arguments
const argv = new Argv()
const args = argv.parseArgs()

// create new config
const config = new Config(args)

// create renderer
const renderer = new BundleRenderer(config)

// create server
const server = new Server(config, renderer)

// start the server
server.start()
