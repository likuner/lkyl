import fse from 'fs-extra'
import path from 'path'
import logger from './logger'

export const resolvePath = (...paths: string[]) => {
  return path.resolve(__dirname, ...paths)
}

export const currentDir = (() => {
  const cwd = process.cwd()
  return (): string => cwd
})()

export const gen = (name: string) => {
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