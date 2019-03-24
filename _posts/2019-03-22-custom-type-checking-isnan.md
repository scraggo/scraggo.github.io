---
layout: post
title: "Custom type checking - isNaN vs Number.isNaN"
date: 2019-03-22 19:45:31 +0530
categories: ["javascript"]
author: "Dave Cohen"
---

Javascript is infamous for being "loose" and misleading with its typing. `typeof [1, 2, 3]` gives you `'object'`, `typeof null` gives you `'object'`, etc.

So instead of writing conditionals using `Array.isArray()`, doing specific `null` checks, etc, I decided to make my own wrapper for `typeof` which I called `getType`:

```js
/**
 * Get typeof item with a few extra types specified.
 * @param {any} item
 * @returns {string} 'array'|'null'|'NaN'| typeof item
 */
function getType(item) {
  if (Array.isArray(item)) {
    return "array";
  }
  if (item === null) {
    return "null";
  }
  if (isNaN(item)) {
    return "NaN";
  }
  return typeof item;
}
```

I unknowingly put a bug in my app. Can you spot it?

...

It's in the 3rd `if` statement.

Basically, the function took anything that wasn't an 'array' or 'null' and decided it was 'NaN'! The function never made it to the final return line, so I wasn't getting 'object', 'string', 'number', etc like I expected.

When I discovered the issue, I wrote tests. (Yet another example of why tests are important.)

```js
describe("getType", () => {
  it("behaves as expected", () => {
    const typesToTest = [
      { actual: [], expected: "array" },
      { actual: {}, expected: "object" },
      { actual: "this is a string", expected: "string" },
      { actual: 123, expected: "number" },
      { actual: NaN, expected: "NaN" },
      { actual: null, expected: "null" },
      { actual: undefined, expected: "undefined" },
      { actual: () => {}, expected: "function" }
    ];
    typesToTest.forEach(testObj => {
      const { actual, expected } = testObj;
      expect(getType(actual)).to.equal(expected);
    });
  });
});
```

I discovered two confusing things:

- `typeof NaN` gives you `'number'`
- `isNaN('NaN')`, `isNaN(undefined)`, `isNaN({})`, `isNaN('blabla')` are all `true`!

I just needed to change one line:

```js
...
  if (typeof item === 'number' && isNaN(item)) {
    return 'NaN';
  }
...
```

Later I discovered the section on `Number.isNaN` in the [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript#standard-library):

Verbatim:

The [Standard Library](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects)
contains utilities that are functionally broken but remain for legacy reasons.

- [29.1](#standard-library--isnan) Use `Number.isNaN` instead of global `isNaN`.

eslint: [`no-restricted-globals`](https://eslint.org/docs/rules/no-restricted-globals)

> Why? The global `isNaN` coerces non-numbers to numbers, returning true for anything that coerces to NaN.
> If this behavior is desired, make it explicit.

```javascript
// bad
isNaN("1.2"); // false
isNaN("1.2.3"); // true

// good
Number.isNaN("1.2.3"); // false
Number.isNaN(Number("1.2.3")); // true
```

Read more:
[Number.isNaN() - JavaScript | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isNaN)

In light of learning that, I could remove the `typeof item === 'number'` check. Here's the fully working function:

```js
/**
 * Get typeof item with a few extra types specified.
 * @param {any} item
 * @returns {string} 'array'|'null'|'NaN'| typeof item
 */
function getType(item) {
  if (Array.isArray(item)) {
    return "array";
  }
  if (item === null) {
    return "null";
  }
  if (Number.isNaN(item)) {
    return "NaN";
  }
  return typeof item;
}
```

Short and sweet!

One way to use `getType`:

```js
const thing = [1, 2, 3];
const thingType = getType(arr);

if (["array", "object", "number"].includes(thingType)) {
  runAwesomeProcess(thing);
} else {
  throw new Error(
    `Bad input: ${thing}. Expected array, object, or number, got '${thingType}'`
  );
}
```

Compare that to:

```js
// if thing is not falsy (null check) and typeof thing is object (array or object)
//    or thing is a number that isn't NaN
if (
  (!!thing && typeof thing === "object") ||
  (typeof thing === "number" && !isNaN(thing))
) {
  runAwesomeProcess(thing);
} else {
  throw new Error(
    `Bad input: ${thing}. Expected array, object, or number, got '${typeof thing}'`
  );
}
```
