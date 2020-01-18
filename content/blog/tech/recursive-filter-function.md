---
type: post
title: 'Using a filter function recursively'
date: 2019-03-29 01:45:31 +0530
categories: ['tech']
tags: ['javascript']
author: 'Dave Cohen'
---

## The problem

Given our array data structure, we only want to include items that have an 'age' property and the age is greater than 17. If the person is under age, we won't allow any of their friends to be included (even if they are old enough to be.)

(Contrived scenario, I know, but I recently needed to do something like this for a different type of authorization.)

```js
const log = item => {
  console.log(JSON.stringify(item));
};

const people = [
  {
    age: 2,
  },
  {
    age: 22,
    friends: [
      {
        age: 17,
      },
      {
        age: 34,
      },
      {
        name: "Sherry O'Teri",
      },
    ],
  },
  {
    name: 'Bob Ross',
  },
  {
    age: 12,
    friends: [
      {
        age: 44,
      },
    ],
  },
];

const validAge = item => typeof item.age === 'number' && item.age > 17;

const thisWontWork = arr => {
  return arr.filter(item => {
    if (item.friends) {
      // here is the recursive call
      return thisWontWork(item.friends).length > 0 && validAge(item);
    } else return validAge(item);
  });
};

log(thisWontWork(people)); // [{"age":22,"friends":[{"age":17},{"age":34},{"name":"Sherry O'Teri"}]}]
```

[Run this code on repl.it](https://repl.it/@decguitar/recursive-filter-function)

We can see that on the top level, the filter works as expected. But if the valid person has `friends` they're _all_ included. What gives? Let's break it down a little bit.

Within the filter function of any given `Array.prototype.filter` call, we need to return a boolean. This line returns the **entire** item, not the subset of items we want:

```js
  ...
  return thisWontWork(item.friends).length > 0 && validAge(item);
```

This would be especially bad if we just returned the resulting array from `thisWontWork`:

```js
  ...
  return thisWontWork(arr);
```

`thisWontWork` returns the _result_ of the filtering which is an **array**. If there are no matches (the filter function always returns false), we still get an array as the return. We can see that even if the array is empty, that item will always be `true` at the top level:

```js
return []; // <- where Boolean([]) === true
```

Aptly named, `thisWontWork`.

## The solution

We need to handle this mismatch with a custom filter function. The swiss army knife of Array.prototype methods is `Array.prototype.reduce`. **You can make map, filter, and other array methods (as well as fancy combinations) with reduce!**

Here's how I solved our recursive filter problem using `reduce`:

```js
const log = item => {
  console.log(JSON.stringify(item));
};

const people = [
  // same as above
];

const validAge = item => typeof item.age === 'number' && item.age > 17;

const thisWillWork = arr => {
  return arr.reduce(
    (acc, item) => {
      // acc -> short for "accumulator" (array)
      // item -> the current array item

      // so that we don't overwrite the item parameter
      const newItem = item;

      if (item.friends) {
        // here is the recursive call
        newItem.friends = thisWillWork(item.friends);
      }
      if (validAge(newItem)) {
        // here's where acc takes the new item
        acc.push(newItem);
      }
      // we always have to return acc
      return acc;
    },
    // initialize accumulator (empty array)
    []
  );
};

log(thisWillWork(people)); // [{"age":22,"friends":[{"age":34}]}]
```

[Run this code on repl.it](https://repl.it/@decguitar/recursive-filter-function)

Awesome! It's working as expected. Only the 22 year old person at the top level is the right age, and we get only the friend of theirs that's the right age.

Imagine solving this problem without recursion. We would need an indefinite number of nested for loops. It would get messy really fast.

Read more about recursion:

> [Recursion and stack](http://javascript.info/recursion)

Read more about array methods:

> [Array methods](https://javascript.info/array-methods#transform-an-array)
>
> [Simplify your JavaScript – Use .map(), .reduce(), and .filter()](https://medium.com/poka-techblog/simplify-your-javascript-use-map-reduce-and-filter-bd02c593cc2d)
>
> [JavaScript Functional Programming — map, filter and reduce](https://medium.com/jsguru/javascript-functional-programming-map-filter-and-reduce-846ff9ba492d)
>
> [Understanding map, filter and reduce in Javascript – Hacker Noon](https://hackernoon.com/understanding-map-filter-and-reduce-in-javascript-5df1c7eee464)
>
> [JavaScript — Learn to Chain Map, Filter, and Reduce](https://codeburst.io/javascript-learn-to-chain-map-filter-and-reduce-acd2d0562cd4)
>
> [Write JavaScript loops using map, filter, reduce and find](https://flaviocopes.com/javascript-loops-map-filter-reduce-find/)
