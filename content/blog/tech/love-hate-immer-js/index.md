---
type: post
title: 'My love hate relationship with ImmerJS'
date: 2020-08-21
categories: ['tech']
tags: ['ImmerJS', 'JavaScript', 'react', 'redux']
author: 'Dave Cohen'
---

After having used [immutable js](https://immutable-js.github.io/immutable-js/docs/#/) for a while, discovering [immer js](https://immerjs.github.io/immer/docs/introduction) was a breath of fresh air. Where immutable js forces you to learn its gigantic API, immer js takes advantage of [ES6 Proxies](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy). These allow you to modify a "draft" version of an object _as if you're mutating it_, but you're not! The return of immer's `produce` function always returns a perfect clone of the draft. `Immer js` also touts:

> Winner of the "Breakthrough of the year" React open source award and "Most impactful contribution" JavaScript open source award in 2019.
>
> Benefits
>
> - Immutability with normal JavaScript objects, arrays, Sets and Maps. No new APIs to learn!
> - Strongly typed, no string based paths selectors etc.
> - Structural sharing out of the box
> - Object freezing out of the box
> - Deep updates are a breeze
> - Boilerplate reduction. Less noise, more concise code.
> - First class support for patches
> - Small: 3KB gzipped

## Quick Example of Immer in Action

```js
// the main export of immer is the majority of what you need to know:
import produce from 'immer';

const baseState = [
  {
    todo: 'Learn typescript',
    done: true,
  },
  {
    todo: 'Try immer',
    done: false,
  },
];

// we use .push and direct assignment to modify the draftState.
// we don't even need to return the draftState. The return is implied!
const nextState = produce(baseState, draftState => {
  draftState.push({ todo: 'Tweet about it' });
  draftState[1].done = true;
});
```

I was _so_ excited when I first read about this library. I found an excuse to use it in a big collaborative side-project. It's a react app that makes heavy use of redux. As we know with both react and redux, one must treat state immutably. `Immer js` handles this exact problem and I don't need to convert the project to the mentality of `immutable js`, use [spread re-assignment](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax), or [`lodash` cloneDeep](https://lodash.com/docs#cloneDeep).

## How Immer falls short

While `immer js` touts being simple and intuitive to use, it has a significant learning curve. It has a [long list of pitfalls](https://immerjs.github.io/immer/docs/pitfalls) (which makes me suspicious about its usability).

Here are a few examples of the shortcomings I've ran into:

### Error: An immer producer returned a new value _and_ modified its draft. Either return a new value _or_ modify the draft

`Immer js` messes with my flow in Redux reducers. I have to be vigilant about where the draft is modified and where I want to return a new object. The error above provides a stack trace that doesn't point to the problem - it merely points to where the `produce` function containing the culprit is defined:

![immer-error.png](immer-error.png)

To fix this particular error, I had to move one of the `case` declarations to before where I modify the draft. Before:

```js
draft.error = null;

switch (type) {
  case LOGOUT:
    return initialState;
```

After:

```js
// immer doesn't let you return a new state after draft is modified.
if (type === LOGOUT) {
  return initialState;
}

draft.error = null;

switch (type) {
  case LOGIN:
    // etc...
```

We can see that after I modify the draft, it's _literally_ a point of no-return. We are forced to return the draft and not a new object. This is a buzz-kill, for sure.

### Spread re-assignment feels like the past

I've found ES6 spread re-assignment to be extremely cool:

```js
case LOGIN_SUCCESS:
  return {
    ...state,
    ...data.parsed, // this spreads all the properties received from `parsed` into new state
    firebaseData: data.firebaseData,
  };
```

To conform to the `immer js` mentality, I came up with something that feels "old-school" (not in a good way):

```js
/**
 * Immer helper, akin to spread assignment:
 * @example Instead of { ...obj }, it will be spreadAssign(draft, obj)
 * @param {Object} draft
 * @param {Object} obj
 * @returns {Object} draft modified
 */
export const spreadAssign = (draft, obj) => {
  Object.entries(obj).forEach(([k, v]) => {
    // eslint-disable-next-line no-param-reassign
    draft[k] = v;
  });
  return draft;
};

// ...

// Reducer

case LOGIN_SUCCESS: {
  draft.firebaseData = firebaseData;
  spreadAssign(draft, parsed);
  return draft;
}
```

Writing helper functions for `immer js` seems backwards to me.

Both this and the previous error bring the learning curve _way_ up, in my opinion. Finding workarounds (that aren't documented) instead of having a consistent API, brings usability of this library down.

## Conclusion

I'm not going to peel `immer js` out of the codebase I'm working on just yet, but I expect to discover more headaches while continuing to use it. I love `immer js` when it simplifies things, but hate it when it gets in the way.

_Have any thoughts on using immer? Please share them with me!_

[Contact me](/contact)
