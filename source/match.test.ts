import { match } from './match'

describe('primitives', () => {
  it.each([
    ['number', Math.random()],
    ['string', Math.random().toString()],
    ['boolean', Math.random() > 0.5]
  ])('should match %s value', (_, value) => {
    const ok = match(value,
      value, true,
      false)

    expect(ok).toBe(true)

    const oh = match(value,
      'nope', true,
      'default')

    expect(oh).toBe('default') // default
  })
})

describe('constructors', () => {
  it('should match constructor', async () => {
    const value = new Error()

    const ok = match(value,
      Error, 'yep',
      'nope')

    expect(ok).toBe('yep')

    const oh = match(value,
      String, 'yep',
      'nope')

    expect(oh).toBe('nope')
  })
})

describe('test functions', () => {
  it('should match lambda', async () => {
    const pos = match(1,
      (x: number) => x > 0, 'positive',
      (x: number) => x < 0, 'negative',
      'zero')

    expect(pos).toBe('positive')

    const neg = match(-1,
      (x: number) => x > 0, 'positive',
      (x: number) => x < 0, 'negative',
      'zero')

    expect(neg).toBe('negative')
  })

  it('should match named function', async () => {
    const pos = match(1,
      positive, 'positive',
      'nope')

    expect(pos).toBe('positive')

    const nope = match(0,
      positive, 'positive',
      'nope')

    expect(nope).toBe('nope')
  })
})

describe('one of', () => {
  it('should match one of values', async () => {
    const ok = match(1,
      [1, 2, 3], 'ok',
      'nope')

    expect(ok).toBe('ok')

    const oh = match(4,
      [1, 2, 3], 'ok',
      'nope')

    expect(oh).toBe('nope')
  })

  it('should match one of tests', async () => {
    const yep = match(1,
      [positive, 0], 'yep',
      'nope')

    expect(yep).toBe('yep')

    const zero = match(0,
      [positive, 0], 'yep',
      'nope')

    expect(zero).toBe('yep')
  })
})

describe('regular expressions', () => {
  it('should match expression', async () => {
    const ok = match('hello',
      /hello/, 'ok',
      'nope')

    expect(ok).toBe('ok')

    const oh = match('nope',
      /hello/, 'ok',
      'nope')

    expect(oh).toBe('nope')
  })

  it('should pass match groups', async () => {
    const ok = match('hello',
      /h(?<ell>.{3})o/, (_: string, groups: Record<string, string>) => groups.ell,
      'nope')

    expect(ok).toBe('ell')
  })
})

it('should throw if no match and no default', () => {
  expect(() => match('nope', 1, 2)).toThrow('No match')
})

it('should call result function', async () => {
  const value = new Error()

  const ok = match(value,
    Error, () => 'yep',
    () => 'nope')

  expect(ok).toBe('yep')

  const oh = match(value,
    String, () => 'yep',
    () => 'nope')

  expect(oh).toBe('nope')
})

function positive (x: number): boolean {
  return x > 0
}
