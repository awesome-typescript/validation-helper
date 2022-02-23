import type { Primitive } from '../types/primitive'

export const isPrimitive = (primitive: Primitive): boolean => {
  return (
    isString(primitive) ||
    isNumber(primitive) ||
    isBoolean(primitive) ||
    isNull(primitive) ||
    isUndefined(primitive)
  )
}

export const isString = (value: Primitive): boolean => {
  return typeof value === 'string' || toString.call(value) === '[object String]'
}

export const isNumber = (value: Primitive): boolean => {
  return Number.isInteger(value)
}

export const isBoolean = (value: Primitive): boolean => {
  return (
    value === true ||
    value === false ||
    toString.call(value) === '[object Boolean]'
  )
}

export const isNull = (value: Primitive): boolean => {
  return value === null
}

export const isUndefined = (value: Primitive): boolean => {
  return value === undefined
}

const toString = Object.prototype.toString
