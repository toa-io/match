export function apply (value: any, result: any): any {
  if (typeof result === 'function')
    return result(value)
  else
    return result
}
