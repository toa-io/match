export function apply (value: any, result: any, parameters: any[]): any {
  if (typeof result === 'function')
    return result(value, ...parameters)
  else
    return result
}
