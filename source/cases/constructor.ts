export function test (test: any): boolean {
  return typeof test === 'function' &&
    test.name !== '' &&
    test.name[0] === test.name[0].toUpperCase()
}

export function match (test: any, value: any): boolean {
  if (test.name === 'String')
    return typeof value === 'string'

  return typeof value === 'function'
    ? value === test
    : test.name in primitives
      // eslint-disable-next-line valid-typeof
      ? typeof value === primitives[test.name]
      : value instanceof test
}

const primitives: Record<string, string> = {
  String: 'string',
  Number: 'number',
  Boolean: 'boolean',
  Symbol: 'symbol',
  BigInt: 'bigint'
}
