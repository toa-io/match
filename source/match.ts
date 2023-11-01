import { check } from './check'
import { fallback } from './fallback'
import { apply } from './apply'
import type { Value, Pattern, Result } from './types'

export function match (value: Value, ...args: any[]): any {
  const last = args.length - 1
  const odd = args.length % 2 === 1
  const otherwise = odd ? args[last] : undefined
  const parameters: any[] = []

  for (let i = 0; i < last; i += 2) {
    const pattern = args[i] as Pattern
    const result = args[i + 1] as Result

    if (check(pattern, value, parameters))
      return apply(value, result, parameters)
  }

  if (odd)
    return fallback(value, otherwise)

  throw new Error('No match found and no default clause given')
}
