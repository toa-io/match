export type Value = string | number | boolean | null | object | undefined
export type Pattern = Func | RegExp | string | number | boolean | null
export type Result = Value | Func
export type Func = (value: Value) => any
