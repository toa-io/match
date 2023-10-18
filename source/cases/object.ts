export function test (pattern: any): boolean {
  return typeof pattern === 'object' && pattern?.constructor.name === 'Object'
}

export function match (pattern: any, value: any): boolean {
  if (typeof value !== 'object')
    return false

  for (const key in pattern) {
    const r = pattern[key]
    const v = value[key]

    if (test(r) && !match(r, v))
      return false

    if (!compare(r, v))
      return false
  }

  return true
}

function compare (pattern: any, value: any): boolean {
  if (typeof pattern === 'function') return pattern(value)
  else return pattern === value
}
