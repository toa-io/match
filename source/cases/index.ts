import * as primitive from './primitive'
import * as constructor from './constructor'
import * as func from './function'
import * as expression from './expression'
import * as object from './object'

export const cases: Test[] = [primitive, constructor, func, expression, object]

export interface Test {
  test: (test: any) => boolean
  match: (test: any, value: any, parameters: any[]) => boolean
}
