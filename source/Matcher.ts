import { match } from './match'
import type { Pattern, Result, Value } from './types'

export class Matcher<T> {
  private readonly args: [Value, ...rest: any[]]

  public constructor (value: Value) {
    this.args = [value]
  }

  public when (pattern: Pattern, result: Result): Matcher<T> {
    this.args.push(pattern, result)

    return this
  }

  public default (result?: Result<T>): T {
    if (arguments.length !== 0)
      this.args.push(result)

    return match<T>(...this.args)
  }
}
