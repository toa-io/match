import { check } from './check'
import { fallback } from './fallback'
import { apply } from './apply'
import { Matcher } from './Matcher'
import type { Value, Pattern } from './types'

export function match<T> (value: Value): Matcher<T>
export function match<T> (value: Value, ...args: any[]): T

export function match<T> (value: Value, ...args: any[]): T | Matcher<T> {
  if (args.length === 0)
    return new Matcher(value)

  const last = args.length - 1
  const odd = args.length % 2 === 1
  const otherwise = odd ? args[last] : undefined
  const parameters: any[] = []

  for (let i = 0; i < last; i += 2) {
    const pattern = args[i] as Pattern
    const result = args[i + 1]

    if (check(pattern, value, parameters))
      return apply(value, result, parameters)
  }

  if (odd)
    return fallback(value, otherwise)

  throw new Error('No match found and no default clause given')
}
