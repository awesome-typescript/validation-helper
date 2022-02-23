import type { Primitive } from '../types'

export const isPrimitive = (value: Primitive): value is Primitive => {
  return (
    isString(value) ||
    isNumber(value) ||
    isBoolean(value) ||
    isNull(value) ||
    isUndefined(value)
  )
}

export const isString = (value: Primitive): value is string => {
  return typeof value === 'string' || toString.call(value) === '[object String]'
}

export const isNumber = (value: Primitive): value is number => {
  return Number.isInteger(value)
}

export const isBoolean = (value: Primitive): value is boolean => {
  return (
    value === true ||
    value === false ||
    toString.call(value) === '[object Boolean]'
  )
}

export const isNull = (value: Primitive): value is null => {
  return value === null
}

export const isUndefined = (value: Primitive): value is undefined => {
  return value === undefined
}

const toString = Object.prototype.toString
