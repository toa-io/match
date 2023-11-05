# Pattern matching for JavaScript

```shell
npm i matchacho
```

```javascript
import { match } from 'matchacho'
```

## Examples

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

## Reference

```javascript
return match(value,
  // equals
  1, () => 'One!',

  // instanceof
  Readable, (stream) => stream.read(),
  Error, 'oopsie!',

  // test function
  positive, (number) => Math.sqrt(number),

  // regular expression
  /(?<left>\d+) \+ (?<right>\d+)/, (value, groups) => groups.left + groups.right,

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
