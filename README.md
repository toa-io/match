# Pattern matching for JavaScript

Patterns:

- primitive values
- primitive types
- classes
- regular expressions
- test functions
- arrays of patterns
- objects with any of the above

## Usage

```shell
npm i matchacho
```

```javascript
import { match } from 'matchacho'
```

## Real-world examples

```javascript
return match(input,
  String, (item: string) => [item],
  Array, input,
  null, [])
```

```javascript
for (const directive of directives)
  mask |= match<number>(directive,
    'private', PRIVATE,
    'public', PUBLIC,
    'no-cache', NO_CACHE,
    0)
```

```javascript
return match(Class,
  Role, () => new Role(value, this.discovery.roles),
  Rule, () => new Rule(value, this.create.bind(this)),
  Incept, () => new Incept(value, this.discovery),
  () => new Class(value))
```

```javascript
throw match(error.code,
  'NOT_ACCEPTABLE', () => new UnsupportedMediaType(),
  'TYPE_MISMATCH', () => new BadRequest(),
  error)
```

_Examples approved by [Ed](https://github.com/Gems)._

## Reference

```javascript
return match(value,
  // equals
  1, () => 'One!',

  // instanceof
  Readable, (stream) => stream.read(),
  Error, (error) => throw error,

  // test function
  positive, (number) => Math.sqrt(number),
  (x) => x < 0, (number) => Math.sqrt(-number),

  // regular expression
  /(\d+) \+ (\d+)/, (groups) => groups[0] + groups[1],
  /(?<left>\d+) \+ (?<right>\d+)/, (groups) => groups.left + groups.right,

  // object matching
  { statusCode: 200 }, (response) => response.data,

  // array matching
  [0, 1], (numbers) => `${numbers[0]} + ${numbers[1]}`,

  // nested test function
  { statusCode: (x) => x >= 200 && x < 300 }, (response) => response.data,

  // default
  (value) => value
)

function positive (value) {
  return value > 0
}
```

See [tests](source/match.test.ts).
