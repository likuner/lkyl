import fse from 'fs-extra'
import path from 'path'
import logger from './logger'

export function resolvePath(...paths: string[]) {
  return path.resolve(__dirname, ...paths)
}

export const currentDir = (function () {
  const cwd = process.cwd()
  return (): string => cwd
})()

export function gen(name: string) {
  const dest = resolvePath(currentDir(), name)
  const exist = fse.existsSync(dest)
  if (exist) {
    logger.error(`path ${dest} already exists`)
    return
  }
  fse.copy(
    resolvePath('../templates/react-ts-template'),
    dest,
    {
      overwrite: false,
      errorOnExist: true
    }
  ).then(() => {
    logger.success(`🚀download ${name} successfully!`)
  }).catch((err) => {
    logger.error(err)
  })
}