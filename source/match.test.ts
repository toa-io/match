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
