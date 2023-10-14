# Pattern matching for JavaScript

## TL;DR

```javascript
return match(value,
  // object matching
  { statusCode: 200 }, (response) => response.data,
  // regular expression
  /(?<left>\d+) \+ (?<right>\d+)/, (value, groups) => groups.left + groups.right,
  // instanceof
  Readable, (stream) => stream.read(),
  Error, (error) => throw error,
  // equals
  1, () => 'One!',
  // equals one of
  ['Yes', 'No'], (answer) => `Answer is ${answer}`,
  // test function
  positive, (number) => Math.sqrt(number),
  // default
  (value) => value
)

function positive (value) {
  return value > 0
}
```
