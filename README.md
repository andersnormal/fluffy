# :dragon_face: Fluffy

<br/>

[![Build Status](https://travis-ci.org/andersnormal/fluffy.svg?branch=master)](https://travis-ci.org/andersnormal/fluffy.svg?branch=master)
[![Taylor Swift](https://img.shields.io/badge/secured%20by-taylor%20swift-brightgreen.svg)](https://twitter.com/SwiftOnSecurity)
[![Volkswagen](https://auchenberg.github.io/volkswagen/volkswargen_ci.svg?v=1)](https://github.com/auchenberg/volkswagen)
[![TypeScript](https://badges.frapsoft.com/typescript/awesome/typescript.png?v=101)](https://github.com/ellerbrock/typescript-badges/)
[![MIT license](http://img.shields.io/badge/license-MIT-brightgreen.svg)](http://opensource.org/licenses/MIT)

Fluffy is a **server side renderer** for [Vue.js](https://vuejs.org/), which is intended to be used with [Nginx](https://nginx.org) to proxy requests.

## Getting Started

> requires a `node` version >= 9.11.2 and an `npm` version >= 5.x.x
> Fluffy uses [Koa](https://github.com/koajs/koa) as middleware
> Fluffy provides a `help` command to display all possible arguments

```bash
# Installs Fluffy to your Vue
npm i @andersnormal/fluffy

# Start fluffy
./node_modules/.bin/fluffy
```

## Arguments

> most command line arguments have a reflection in environment variables, which allows it to be easily tested and developed in many environments

### `help`

Displays all the available arguments

### `--socket` (string) Default: `/tmp/fluffy.sock`

The socket to listen on for rendering requests.

### `--dev` (boolean)

Enable the [koa-webpack](https://github.com/shellscape/koa-webpack) middleware for development.

### `--webpack` (string)

Path to the Webpack config for development. This should expose an object with

```
{
  ssrConfig: YOUR_CONFIG,
  devConfig: YOUR_CONFIG
}
```

### `--port` (number)

The port to listen on for rendering requests.

### `--bundle` (string)

Path to the server bundle.

### `--manifest` (string)

Path to the client manifest

### `--template` (string)

Path to the render template.

### `--mode` (string)

The Unix socket file system [mode](https://en.wikipedia.org/wiki/File_system_permissions).

### `--version`

Displays the current version of :dragon_face: Fluffy

## Development

> all commands can be seen via `npm run help`

```bash
# Clone the repository
git clone https://github.com/andersnormal/fluffy

# Start the local dev server
docker-compose up
```

Have fun!

## License
[MIT](/LICENSE)
