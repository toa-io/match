import { Base } from './Base'
import { match } from './match'
import type { Result, Value } from './types'

export class Instance<T> extends Base {
  public default (result?: Result<T>): this {
    this.args.push(result)

    return this
  }

  public match (value: Value): T {
    this.args[0] = value

    return match<T>(...this.args)
  }
}
