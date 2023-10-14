import * as primitive from './primitive'

export const cases: Test[] = [primitive]

export interface Test {
  test: (test: any) => boolean
  match: (test: any, value: any) => boolean
}
