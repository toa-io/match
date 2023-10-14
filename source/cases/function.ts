export function test (test: any): boolean {
  return typeof test === 'function' &&
    (
      test.name === '' ||
      test.name[0] === test.name[0].toLowerCase()
    )
}

export function match (test: any, value: any): boolean {
  return test(value) === true
}
