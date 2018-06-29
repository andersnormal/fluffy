import chalk from 'chalk'

export const log = console.log // logging
export const error = (msg) => log(chalk.bold.red(msg))
export const warning = (msg) => log(chalk.keyword('orange')(msg))
