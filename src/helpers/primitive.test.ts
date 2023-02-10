import {
  isString,
  isNumber,
  isBoolean,
  isUndefined,
  isNull,
  isPrimitive,
} from './primitive'

describe('primitive', () => {
  test('is string', () => {
    expect(isString('test')).toBe(true)
  })

  test('is not string', () => {
    expect(isString(99999999)).toBe(false)
  })

  test('is number', () => {
    expect(isNumber(1)).toBe(true)
  })

  test('is not number', () => {
    expect(isNumber('99999999')).toBe(false)
  })

  test('is boolean', () => {
    expect(isBoolean(true)).toBe(true)
  })

  test('is not boolean', () => {
    expect(isBoolean(99999999)).toBe(false)
  })

  test('is undefined', () => {
    expect(isUndefined(undefined)).toBe(true)
  })

  test('is not undefined', () => {
    expect(isUndefined(null)).toBe(false)
  })

  test('is null', () => {
    expect(isNull(null)).toBe(true)
  })

  test('is not null', () => {
    expect(isNull(undefined)).toBe(false)
  })

  test('is primitive', () => {
    expect(isPrimitive(1)).toBe(true)
    expect(isPrimitive('1')).toBe(true)
    expect(isPrimitive(true)).toBe(true)
    expect(isPrimitive(null)).toBe(true)
    expect(isPrimitive(undefined)).toBe(true)
  })

  test('is not primitive', () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    expect(isPrimitive([] as any)).toBe(false)
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    expect(isPrimitive({} as any)).toBe(false)
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    expect(isPrimitive([{ name: 1 }] as any)).toBe(false)
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    expect(isPrimitive({ name: 1 } as any)).toBe(false)
  })
})
