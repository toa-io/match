import * as primitive from './primitive'
import * as constructor from './constructor'
import * as func from './function'
import * as expression from './expression'

export const cases: Test[] = [primitive, constructor, func, expression]

export interface Test {
  test: (test: any) => boolean
  match: (test: any, value: any, parameters: any[]) => boolean
}
