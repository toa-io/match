import * as primitive from './primitive'
import * as constructor from './constructor'
import * as func from './function'
import * as expression from './expression'
import * as object from './object'
import * as array from './array'

export const cases: Test[] = [primitive, constructor, func, expression, object, array]

export interface Test {
  test: (test: any) => boolean
  match: (test: any, value: any, parameters: any[]) => boolean
}
