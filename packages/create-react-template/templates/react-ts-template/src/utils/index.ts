import { v4 as uuid } from 'uuid'
import { get } from 'lodash'

/**
 * 获取 uuid
 * @returns
 */
export function getUuid(): string {
  return uuid()
}

/**
 * 获取嵌套对象属性值
 * @param obj
 * @param path
 * @param defaultValue
 * @returns 
 */
export function deepGet(obj: Record<string, unknown>, path: string | Array<string>, defaultValue?: unknown): unknown {
  return get(obj, path, defaultValue)
}