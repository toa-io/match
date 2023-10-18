# Pattern matching for JavaScript

## TL;DR

```javascript
return match(value,
  // equals
  1, () => 'One!',

  // equals one of
  ['Yes', 'No'], (answer) => `Answer is ${answer}`,

  // instanceof
  Readable, (stream) => stream.read(),
  Error, 'oopsie!',

  // test function
  positive, (number) => Math.sqrt(number),

  // regular expression
  /(?<left>\d+) \+ (?<right>\d+)/, (value, groups) => groups.left + groups.right,

  // object matching
  { statusCode: 200 }, (response) => response.data,

  // nested test function
  { statusCode: (x) => x >= 200 && x < 300 }, (response) => response.data,

  // default
  (value) => value
)

function positive (value) {
  return value > 0
}
```
