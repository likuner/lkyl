import chalk, { Chalk } from 'chalk'

const genLogger = (level: Chalk) => (...args: string[]) => {
  console.log(level(...args))
}

export default {
  error: genLogger(chalk.redBright),
  warn: genLogger(chalk.yellowBright),
  info: genLogger(chalk.blueBright),
  success: genLogger(chalk.greenBright)
}