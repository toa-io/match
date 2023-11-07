import { check } from '../check'

export function test (pattern: any): boolean {
  return Array.isArray(pattern)
}

export function match (pattern: any[], value: any): boolean {
  if (pattern.length !== value.length)
    return false

  for (let i = 0; i < pattern.length; i++)
    if (!check(pattern[i], value[i]))
      return false

  return true
}
