import fse from 'fs-extra'
import path from 'node:path'

export function resolvePath(...paths: string[]) {
  return path.resolve(__dirname, ...paths)
}

export const currentDir = (function () {
  const cwd = process.cwd()
  return (): string => cwd
})()

export function gen(name: string, { template }: Record<string, string>) {
  fse.copy(
    resolvePath('templates/react-ts-template'),
    currentDir()
  )
}