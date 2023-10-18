import { check } from './check'
import { fallback } from './fallback'
import { apply } from './apply'
import type { Value, Pattern, Result } from './types'

export function match (value: Value, ...args: any[]): any {
  const last = args.length - 1

  let otherwise: any

  if (args.length % 2 === 1)
    otherwise = args[last]

  const parameters: any[] = []

  for (let i = 0; i < last; i += 2) {
    const pattern = args[i] as Pattern
    const result = args[i + 1] as Result

    if (check(pattern, value, parameters))
      return apply(value, result, parameters)
  }

  return fallback(value, otherwise)
}
