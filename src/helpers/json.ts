import type { JSONValue } from '../types'

import { isString } from './primitive'
import { isArray, isObject } from './reference'

const rx_json_pattern = /[\d A-Za-z-]*"(?=:):[\d "-ć]*(?<=")|"[\d A-Za-z-]*"(?=:):[\d "-ć]*(?=,)|"[\d A-Za-z-]*"(?=:):[\d "-ć]*(?=\w+)/

export const isJson = (value: JSONValue | string): boolean => {
  if (isObject(value) || isArray(value)) {
    return isJsonReference(value)
  }

  if (isString(value)) {
    return isJsonString(value)
  }

  return false
}

export const isJsonReference = (value: JSONValue): boolean => {
  try {
    const jsonString = JSON.stringify(value)

    return rx_json_pattern.test(jsonString) && !!JSON.parse(jsonString)
  } catch (error) {
    return false
  }
}

export const isJsonString = (value: string): boolean => {
  try {
    return rx_json_pattern.test(value) && !!JSON.parse(value)
  } catch (error) {
    return false
  }
}
