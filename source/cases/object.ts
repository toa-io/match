import { check } from '../check'

export function test (pattern: any): boolean {
  return typeof pattern === 'object' && pattern?.constructor.name === 'Object'
}

export function match (pattern: any, value: any): boolean {
  if (typeof value !== 'object')
    return false

  for (const key in pattern)
    if (!check(pattern[key], value[key]))
      return false

  return true
}
