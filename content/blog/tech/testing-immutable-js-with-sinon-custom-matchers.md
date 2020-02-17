---
author: 'Dave Cohen'
categories: ['tech']
date: 2020-02-15 01:45:31 +0130
description: 'Problems with unexpected assertion failures can arise while testing immutablejs with sinon. This post is a brief guide on how to create a custom matcher that will correctly calculate the equivalence between a mock/stub/spy call with an immutable parameter. The way I’ll be making the assertion is with calledWith from sinon-chai (a plugin for chai that helps with making should or expect assertions for sinon mocks). This github issue on sinonjs outlines the problem...'
tags: ['testing', 'sinon', 'immutablejs']
title: 'Testing immutable js with sinon custom matchers'
type: post
# redirect_from:
#   - /tech/website-makeover-gatsby/
---

Problems with unexpected assertion failures can arise while testing [`immutablejs`](https://immutable-js.github.io/immutable-js/) with [`sinon`](https://sinonjs.org). This post is a brief guide on how to create a custom matcher that will correctly calculate the equivalence between a mock/stub/spy call with an `immutable` parameter.

The way I'll be making the assertion is with `calledWith` from [`sinon-chai`](https://github.com/domenic/sinon-chai) (a plugin for `chai` that helps with making `should` or `expect` assertions for `sinon` mocks).

This [github issue on sinonjs](https://github.com/sinonjs/sinon/issues/2077) outlines the problem. It's a very easy one to run into. This post is one solution to it.

> [Sinon calledWith fails comparing ImmutableJS arguments that it deems equal](https://github.com/sinonjs/sinon/issues/2077)

## The callback and its calling function

Here's the function in our source code that we'll be mocking:

```js
import { List } from 'immutable';

function callOptionalImmutableParam(data, { option = new List() } = {}) {
  // do some stuff
  return 'crunched data';
}
```

The _interesting_ thing about this function is that it takes an optional argument with named parameter `option` that will default to an empty Immutable List.

Some `theoreticalFunction` could use this as a callback:

```js
function theoreticalFunction(data, callback) {
  // pretend we're dynamically getting a List from `data`
  const customList = new List(['custom', 'list']);
  callback(data, { option: customList });
}
```

## Successfully testing the callback

To test that `theoreticalFunction` calls `callOptionalImmutableParam` with the right arguments, here's the setup:

```js
import { expect } from 'chai';
import sinon from 'sinon';
import { List, is } from 'immutable';

/**
 * Get a custom matcher to validate the option List
 * @param {Immutable.List} expected option List
 * @returns {Function} sinon.match
 */
function getMatcher(expected) {
  return sinon.match(
    // use Immutable.is instead of deepEquals
    value => is(expected, value.option),
    // message if path doesn't match:
    JSON.stringify(expected.toJS())
  );
}
```

The `getMatcher` function will be used in our assertions. It takes an `expected` value (which should be Immutable) and runs it through a [`sinon.match` custom matcher function](https://sinonjs.org/releases/v7.5.0/matchers/). The comment `// use Immutable.is instead of deepEquals` points out what's great about the custom matcher - we can use Immutable's built-in comparison to get at the _values_ inside of any Immutable data object. We also `stringify` the passed in `expected` argument so that if our assertion fails, we get a useful message instead of `undefined`.

And the assertion:

```js
it('calls callback with expected arguments', function() {
  const mockCall = sinon.stub();

  // call the function with `mockCall` as the callback:
  theoreticalFunction({ data: 'data' }, mockCall);

  // use `getMatcher` as the 2nd parameter of `calledWith`
  expect(mockCall).to.have.been.calledWith(
    { data: 'data' },
    getMatcher(new List(['custom', 'list']))
  );
});
```

We use `getMatcher` inside of `calledWith` (along with the first `data` argument) which gives us a passing test!

## Testing without the matcher

Suppose we didn't bother with a custom matcher:

```js
it('calls callback with expected arguments', function() {
  const mockCall = sinon.stub();

  theoreticalFunction({ data: 'data' }, mockCall);

  expect(mockCall).to.have.been.calledWith(
    { data: 'data' },
    { option: new List(['custom', 'list']) }
  );
});
```

`chai`'s built-in deep equals check is a no-go in this case. It will compare the (practically) useless meta-data inside the Immutable List instance:

```txt
AssertionError: expected { path: List [ "custom", "list" ] } to equal { path: List [ "custom", "list" ] }
  + expected - actual

    {
      "path": {
  -    "__altered": true
  +    "__altered": false
        "__hash": [undefined]
        "__ownerID": [undefined]
        "_capacity": 2
        "_level": 5
          "array": [
            "moments"
            0
          ]
  -      "ownerID": {}
  +      "ownerID": [undefined]
        }
        "size": 2
      }
    }
```

While the _values_ in the Immutable structure are equivalent, the deep equals check finds these hidden properties. The failures are prefixed with `-`.

The test failure terminal output can also be a list of _all_ the calls to the mock function. One of them will look exactly correct, but will still complain about not being a match.

## Read more

To learn more about sinon matchers and the related topics, have a look at the links below.

- <https://sinonjs.org/releases/v7.5.0/matchers/>
- <https://changelog.com/posts/this-week-i-learned-about-sinon-matchers>
- <https://stackoverflow.com/questions/41231496/how-to-match-an-array-of-objects-with-sinon-js>
