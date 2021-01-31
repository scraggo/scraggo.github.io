---
type: post
title: 'How to prevent circular dependencies'
date: 2019-03-23 19:45:31 +0530
categories: ['tech']
tags: ['javascript']
author: 'Dave Cohen'
redirect_from:
  - /tech/circular-dependencies-bug/
  - /javascript/2019/03/23/circular-dependencies-bug.html
---

Some errors are kind of mysterious. The first time I got "'myFunction' is not a function" type errors, I was at a loss for a few hours. Logging out the functions from my require statements came back as `{}` or `undefined`.

What I learned, TL;DR - don't import file 'a' into file 'b' AND file 'b' into file 'a'. That's an example of a "circular dependency."

Brief example of creating a circular dependency:

```js
// myUtils.js
const { validate } = require('./validators');

const myUtil = thing => console.log(validate(thing));

module.exports = {
  thing,
};

// validators.js
const { myUtil } = require('./myUtils');

const validate = thing => typeof thing === 'string' && thing.length > 42;

const ultimateValidate = thing => {
  myUtil(thing);
  if (!validate(thing)) {
    return { error: true, value: thing };
  }
  return { error: false, value: thing };
};

module.exports = {
  validate,
  ultimateValidate,
};
```

myUtils.js requires validators.js and vice versa. Can you see how this is "circular"? The `require` system will resolve one file before another and does so to avoid a feedback loop where one file requires another, which requires the other, which requires the other...

How to avoid:

- Have file 'a' import dependencies not required in file 'b'
- Have 'main' files which handle module integrations
- Use dependency injection

For our brief example, `myUtil` could use dependency injection:

```js
// myUtils.js
// here, we removed the require validators statement
const myUtil = (thing, validatorFunc) => console.log(validatorFunc(thing));
// module.exports = ...

// validators.js
// now we can safely require myUtil
const ultimateValidate = thing => {
  myUtil(thing, validate); // <- we pass in validate function where it's in scope
  ...
};

```

Read more:

> <https://stackoverflow.com/questions/10869276/how-to-deal-with-cyclic-dependencies-in-node-js>
>
> <https://medium.com/visual-development/how-to-fix-nasty-circular-dependency-issues-once-and-for-all-in-javascript-typescript-a04c987cf0de>
