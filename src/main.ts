import Config from './config'
import Argv from './argv'
import BundleRenderer from './renderer/bundle'
import Server from './server'
import * as Koa from 'koa'

// parse command line arguments
const argv = new Argv()
const args = argv.parseArgs()

// create new config
const config = new Config(args)

// create new Koa app
const app = new Koa()

// create renderer
const renderer = new BundleRenderer(config, app)

// create server
const server = new Server(config, renderer, app)

// start the server
server.start()
