import fse from 'fs-extra'
import fs from 'fs'
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
    if (setPackageJson(dest, { name })) {
      logger.success(`🚀download ${name} successfully!`)
    }
  }).catch((err) => {
    logger.error(err)
  })
}

const setPackageJson = (dest: string, args: Record<string, any> = {}): boolean => {
  try {
    const packagePath = resolvePath(dest, 'package.json')
    const settingData = fs.readFileSync(packagePath, 'utf-8') || '{}'
    const settingJson = JSON.parse(settingData)
    Object.entries(args).forEach(([key, value]) => {
      settingJson[key] = value
    })
    fs.writeFileSync(packagePath, JSON.stringify(settingJson, null, 2), 'utf-8')
    return true
  } catch (err) {
    logger.error(err as any)
    return false
  }
}