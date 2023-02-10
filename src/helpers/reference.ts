import type { JSONValue } from '../types'

export const isObject = (value: JSONValue): value is JSONValue => {
  return Object.prototype.toString.call(value) === '[object Object]'
}

export const isArray = (value: JSONValue): value is JSONValue => {
  return (
    Object.prototype.toString.call(value) === '[object Array]' &&
    Array.isArray(value)
  )
}
