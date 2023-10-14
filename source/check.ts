import { type Test, type Value } from './types'
import { cases } from './cases'

export function check (test: Test, value: Value): boolean {
  if (Array.isArray(test))
    return iterate(test, value)

  for (const when of cases)
    if (when.test(test))
      return when.match(test, value)

  return false
}

function iterate (tests: Test[], value: Value): boolean {
  for (const test of tests)
    if (check(test, value))
      return true

  return false
}
