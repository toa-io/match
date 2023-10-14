import { type Test, type Value } from './types'
import { cases } from './cases'

export function check (test: Test, value: Value): boolean {
  for (const when of cases)
    if (when.test(test))
      return when.match(test, value)

  return false
}
