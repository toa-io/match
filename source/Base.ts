import type { Pattern, Result, Value } from './types'

export class Base {
  protected readonly args: [Value, ...rest: any[]]

  public constructor (value?: Value) {
    this.args = [value]
  }

  public when (pattern: Pattern, result: Result): this {
    this.args.push(pattern, result)

    return this
  }
}
