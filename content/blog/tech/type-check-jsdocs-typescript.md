---
type: post
title: 'TypeScript-lite: JSDoc for type-checking js files'
date: 2021-12-05 01:45:31 +0130
categories: ['tech']
tags: ['typescript', 'javascript']
author: 'Dave Cohen'
---

## Overview

Did you know that you can use TypeScript features in JavaScript projects? When I discovered this and tried it out, I really enjoyed the results. Let's go a bit into how it works.

With a few simple ingredients:

- VSCode
- JavaScript
- Willingness to add types in JSDoc (and optionally importing TypeScript types)

You can:

- statically check the types of .js files
- run `tsc` compiler on .js files
- write types that are compatible with JSDoc
  - these include utility types like `Partial`. Example: `/** @param {Partial<defaults>} options */`
- write TypeScript types in `.ts.` files and import them
- get all of this with minimal effort and code changes

Limitations:

- advanced TypeScript in JSDoc may not be parse-able by JSDoc
- inelegance compared to TypeScript:
  - type definitions in JSDoc comments are verbose
  - type casting syntax is clumsy. Unlike the JSDoc comments, it sits right inside your code
- There isn’t a lot of writing about using JSDoc typings.

## Configuring

`// @ts-check` at the top of a .js file

- this on its own is enough! You'll reap many benefits if JSDoc doc-strings are already in place.

Instead (or in addition), you can create a `jsconfig.json` or a `tsconfig.json`:

```json
{
  "compilerOptions": {
    "checkJs": true,
    "strict": false // true for making types mandatory
  }
}
```

## JSDoc

### interfaces with `@typedef`

```js
/**
 * a typical item that can be produced
 * @typedef {Object} Item
 * @property {string} description the item description
 */
```

Use with `@param`, `@type`, etc

```js
/**
 * create new items
 * @param {number} qt quantity of items to be created
 * @returns {Item[]}
 */
function create(qt) {
  // in TypeScript, this would be
  // const items: Item[] = [];

  /** @type Item[] */
  const items = [];
  // ...create and return items
}
```

### extending an interface with `&` (not "official" JSDoc syntax):

```js
/**
 * @typedef {Object} Item
 * @property {string} description the item description
 *
 * @typedef {Object} ChildType
 * @property {String} shinyThing
 *
 * @typedef {Item & ChildType} FancyItem
 */
```

### @template

> Now for the craziest thing in JSDoc: you can even do generics.

```js
/**
 * Takes any object with a name prop and removes it
 * @template T
 * @param {T & {name?: string}} inputObj
 * @returns {Omit<T, 'name'>}
 */
const deleteName = (inputObj) => {
  /** @type {typeof inputObj} */
  // ...
```

- <https://gils-blog.tayar.org/posts/jsdoc-typings-all-the-benefits-none-of-the-drawbacks/#generics>
- <https://docs.joshuatz.com/cheatsheets/js/jsdoc/#generics-in-jsdoc>

### importing jsdoc or .d.ts file

```js
/**
 * @typedef { import("./models").Customer } Customer
 */

 /** @type {Customer} */
const theCustomer = { ... }
```

## When to convert to TypeScript

If your codebase is going to be worked on long-term, it's critical in some way, and your developers know TypeScript, converting to TypeScript is the way to go.

If you want a quick payoff and type-checking for a small codebase and don't have the right resources or willingness to do an overhaul, my recommendation is to use JSDoc. It'll take a little time to learn and set up correctly, but having type safety in JavaScript is exciting!

## References

See [Do TypeScript without TypeScript - Simone Sanfratello | YouTube](https://www.youtube.com/watch?v=xLDVfBUgD8U&t=114s) for a demo. Also see the associated repo: <https://github.com/simone-sanfratello/do-typescript-without-typescript>.

Articles:

- <https://gils-blog.tayar.org/posts/jsdoc-typings-all-the-benefits-none-of-the-drawbacks/>
- <https://docs.joshuatz.com/cheatsheets/js/jsdoc/>
- <https://goulet.dev/posts/how-to-write-ts-interfaces-in-jsdoc/>
- <https://naruhodo.dev/type-check-your-javascript-with-jsdoc/>
- [How to get type-checking and generate TypeScript Typing declaration (types.d.ts) from JSDoc annotations · Code with Hugo](https://codewithhugo.com/jsdoc-typescript-typings-types-d-ts/) - npm packages including `jsdoc`, `tsd-jsdoc`

Official resources:

- [Working with JavaScript in Visual Studio Code](https://code.visualstudio.com/docs/nodejs/working-with-javascript)
- <https://www.typescriptlang.org/docs/handbook/intro-to-js-ts.html>
- <https://www.typescriptlang.org/docs/handbook/type-checking-javascript-files.html>
- <https://www.typescriptlang.org/docs/handbook/jsdoc-supported-types.html>
