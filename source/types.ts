export type Value = string | number | bigint | boolean | null | object | symbol | undefined
export type Pattern = Func | RegExp | string | number | boolean | null
export type Result<T = any> = T | Func<T>
export type Func<T = any> = (value: Value) => T
