export function test (test: any): boolean {
  const type = typeof test

  return type === 'string' ||
    type === 'number' ||
    type === 'boolean' ||
    test === null
}

export function match (test: any, value: any): boolean {
  return test === value
}
