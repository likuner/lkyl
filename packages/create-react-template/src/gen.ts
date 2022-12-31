import fse from 'fs-extra'
import path from 'path'
import chalk from 'chalk'

export function resolvePath(...paths: string[]) {
  return path.resolve(__dirname, ...paths)
}

export const currentDir = (function () {
  const cwd = process.cwd()
  return (): string => cwd
})()

export function gen(name: string) {
  fse.copy(
    resolvePath('../templates/react-ts-template'),
    resolvePath(currentDir(), name)
  ).then(() => {
    console.log(chalk.greenBright(`🚀download ${name} successfully!`))
  }).catch(() => {
    console.log(chalk.redBright(`download ${name} failed!`))
  })
}