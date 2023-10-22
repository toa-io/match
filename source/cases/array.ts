import { check } from '../check'

export function test (pattern: any): boolean {
  return Array.isArray(pattern)
}

export function match (pattern: any[], value: any, parameters: any[]): boolean {
  if (!Array.isArray(value))
    return false

  if (pattern.length !== value.length)
    return false

  for (let i = 0; i < pattern.length; i++)
    if (!check(pattern[i], value[i], parameters))
      return false

  return true
}
