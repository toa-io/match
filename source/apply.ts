export function apply (value: any, result: any, parameters: any[]): any {
  if (typeof result === 'function')
    if (parameters.length === 0)
      return result(value)
    else
      return result(...parameters)
  else
    return result
}
