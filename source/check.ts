import { type Pattern, type Value } from './types'
import { cases } from './cases'

export function check (pattern: Pattern, value: Value, parameters: any[]): boolean {
  if (Array.isArray(pattern))
    return iterate(pattern, value, parameters)

  for (const when of cases)
    if (when.test(pattern))
      return when.match(pattern, value, parameters)

  return false
}

function iterate (patterns: Pattern[], value: Value, parameters: any[]): boolean {
  for (const pattern of patterns)
    if (check(pattern, value, parameters))
      return true

  return false
}
