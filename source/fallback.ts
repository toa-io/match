import type { Value } from './types'

export function fallback (value: Value, otherwise: any): any {
  if (typeof otherwise === 'function')
    return otherwise(value)
  else
    return otherwise
}
