import { type Pattern, type Value } from './types'
import { cases } from './cases'

export function check (pattern: Pattern, value: Value, parameters: any[] = []): boolean {
  for (const when of cases)
    if (when.test(pattern))
      return when.match(pattern, value, parameters)

  return false
}
