export function test (test: any): boolean {
  return test instanceof RegExp
}

export function match (test: any, value: any, parameters: any[]): boolean {
  if (typeof value !== 'string')
    return false

  const match = value.match(test)

  if (match === null)
    return false

  parameters.push(match.groups)

  return true
}
