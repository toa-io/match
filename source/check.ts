import { type Pattern, type Value } from './types'
import { cases } from './cases'

export function check (test: Pattern, value: Value, parameters: any[]): boolean {
  if (Array.isArray(test))
    return iterate(test, value, parameters)

  for (const when of cases)
    if (when.test(test))
      return when.match(test, value, parameters)

  return false
}

function iterate (tests: Pattern[], value: Value, parameters: any[]): boolean {
  for (const test of tests)
    if (check(test, value, parameters))
      return true

  return false
}
