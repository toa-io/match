import type { Value } from './types'

export function fallback (value: Value, otherwise: any): any {
  switch (typeof otherwise) {
    case 'undefined':
      throw new Error('No match found and no default clause given')
    case 'function':
      return otherwise(value)
    default:
      return otherwise
  }
}
