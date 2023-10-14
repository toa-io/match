import * as primitive from './primitive'
import * as constructor from './constructor'

export const cases: Test[] = [primitive, constructor]

export interface Test {
  test: (test: any) => boolean
  match: (test: any, value: any) => boolean
}
