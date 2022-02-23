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
    // eslint-disable-next-line unicorn/no-useless-undefined
    expect(isUndefined(undefined)).toBe(true)
  })

  test('is not undefined', () => {
    // eslint-disable-next-line unicorn/no-null
    expect(isUndefined(null)).toBe(false)
  })

  test('is null', () => {
    // eslint-disable-next-line unicorn/no-null
    expect(isNull(null)).toBe(true)
  })

  test('is not null', () => {
    // eslint-disable-next-line unicorn/no-useless-undefined
    expect(isNull(undefined)).toBe(false)
  })

  test('is primitive', () => {
    expect(isPrimitive(1)).toBe(true)
    expect(isPrimitive('1')).toBe(true)
    expect(isPrimitive(true)).toBe(true)
    // eslint-disable-next-line unicorn/no-null
    expect(isPrimitive(null)).toBe(true)
    // eslint-disable-next-line unicorn/no-useless-undefined
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
