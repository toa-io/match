import { type Test, type Value } from './types'
import { cases } from './cases'

export function check (test: Test, value: Value, parameters: any[]): boolean {
  if (Array.isArray(test))
    return iterate(test, value, parameters)

  for (const when of cases)
    if (when.test(test))
      return when.match(test, value, parameters)

  return false
}

function iterate (tests: Test[], value: Value, parameters: any[]): boolean {
  for (const test of tests)
    if (check(test, value, parameters))
      return true

  return false
}
