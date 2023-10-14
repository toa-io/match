import { check } from './check'
import { fallback } from './fallback'
import { apply } from './apply'
import type { Value, Test, Result } from './types'

export function match (value: Value, ...args: any[]): any {
  let otherwise: any

  if (args.length % 2 === 1)
    otherwise = args.pop()

  const parameters: any[] = []

  for (let i = 0; i < args.length; i += 2) {
    const test = args[i] as Test
    const result = args[i + 1] as Result

    if (check(test, value, parameters))
      return apply(value, result, parameters)
  }

  return fallback(value, otherwise)
}
