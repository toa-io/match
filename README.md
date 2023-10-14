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
  // regular expression
  /(?<left>\d+) \+ (?<right>\d+)/, (value, groups) => groups.left + groups.right,
  // object matching
  { statusCode: 200 }, (response) => response.data,
  // default
  (value) => value
)

function positive (value) {
  return value > 0
}
```
