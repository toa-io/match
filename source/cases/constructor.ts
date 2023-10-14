export function test (test: any): boolean {
  return typeof test === 'function' && test.name[0] === test.name[0].toUpperCase()
}

export function match (test: any, value: any): boolean {
  return value instanceof test
}
