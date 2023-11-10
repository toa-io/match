import { match } from './match'
import { Base } from './Base'
import type { Result } from './types'

export class Matcher<T> extends Base {
  public default (result?: Result<T>): T {
    if (arguments.length !== 0)
      this.args.push(result)

    return match<T>(...this.args)
  }
}
