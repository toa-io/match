export type Value = string | number | boolean | null | object
export type Test = Func | RegExp | string | number | boolean | null
export type Result = Value | Func
export type Func = (value: Value) => any
