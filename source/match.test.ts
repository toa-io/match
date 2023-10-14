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
    function positive (x: number): boolean {
      return x > 0
    }

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
