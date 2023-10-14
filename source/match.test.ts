import { match } from './match'

describe('primitives', () => {
  it.each([
    ['number', Math.random()],
    ['string', Math.random().toString()]
  ])('should match %s value', (_, value) => {
    const ok = match(value,
      value, true,
      false)

    expect(ok).toBe(true)

    const oh = match(value,
      null, true,
      false)

    expect(oh).toBe(false)
  })
})
