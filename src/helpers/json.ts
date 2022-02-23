import type { JSONValue } from '../types'

import { isString } from './primitive'
import { isArray, isObject } from './reference'

const rx_json_pattern = /[\d A-Za-z-]*"(?=:):[\d "-ć]*(?<=")|"[\d A-Za-z-]*"(?=:):[\d "-ć]*(?=,)|"[\d A-Za-z-]*"(?=:):[\d "-ć]*(?=\w+)/

export const isJson = (value: JSONValue | string): boolean => {
  return isJsonReference(value) || isString(value) || false
}

export const isJsonReference = (value: JSONValue): value is JSONValue => {
  try {
    if (isObject(value) || isArray(value)) {
      const jsonString = JSON.stringify(value)
      return rx_json_pattern.test(jsonString) && !!JSON.parse(jsonString)
    }
  } catch (error) {
    return false
  }
  return false
}

export const isJsonString = (value: string): boolean => {
  try {
    if (isString(value)) {
      return rx_json_pattern.test(value) && !!JSON.parse(value)
    }
  } catch (error) {
    return false
  }
  return false
}
