import { test, expect } from 'bun:test'
import { hello } from './mostro.ts'


test('wrapEvent', () => {

    const testValue = 'Mostro'
    const result = hello(testValue)
    const expected = `Hello Mostro!`

    expect(result).toEqual(expected)
  })