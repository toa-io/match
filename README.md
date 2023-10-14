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
  Error, (error) => throw error,
  // test function
  positive, (number) => Math.sqrt(number),
  // object matching
  { statusCode: 200 }, (response) => response.data,
  // regular expression
  /(?<left>\d+) \+ (?<right>\d+)/, (value, groups) => groups.left + groups.right,
  // default
  (value) => value
)

function positive (value) {
  return value > 0
}
```