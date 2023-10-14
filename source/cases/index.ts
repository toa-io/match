import * as primitive from './primitive'
import * as constructor from './constructor'
import * as func from './function'

export const cases: Test[] = [primitive, constructor, func]

export interface Test {
  test: (test: any) => boolean
  match: (test: any, value: any) => boolean
}