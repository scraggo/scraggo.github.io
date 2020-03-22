---
type: post
title: Contributing to Open Source - is - type check values
date: 2020-03-22
categories: ['tech']
tags: ['TypeScript', 'Open Source']
author: 'Dave Cohen'
redirect_from:
  - /tech/contributing-to-open-source-is-type-checking/
---

This post is a recount of my recent experience contributing to [is](https://github.com/sindresorhus/is), a JavaScript open source type checking library.

> https://github.com/sindresorhus/is
>
> https://www.npmjs.com/package/@sindresorhus/is

I'll outline the process from beginning to end - the initial filing of the feature request to getting the pull request merged.

Some of the open source contribution best-practices I tried to follow:

- _Do not_ open a pull request first.
- If you have a feature idea, a bug report, or pretty much anything to say, file an issue.
- Explain the problem and the value of the solution. Converse with the owner of the repo and have an open mind. (Maybe what you're requesting is already available in the library)
- Get buy-in and wait for an explicit invitation to alter the source code.
- Make edits. Write tests and update the documentation.
- Converse, ask questions, follow the style that the maintainers propose.
- Be gracious and thankful!

## About `is`

`is` makes checking a type in JavaScript much easier than what's built into the language.

The first example in the README shows how easy it is to use:

```js
const is = require('@sindresorhus/is');

is('🦄');
//=> 'string'

is(new Map());
//=> 'Map'

is.number(6);
//=> true
```

The [author of this library](https://www.npmjs.com/~sindresorhus) has created over 1,000 packages that are used by many developers daily. This one in particular has 2,461,210 weekly downloads.

## The feature I requested

One check in particular I find especially useful is `is.nullOrUndefined(value)`. The JS builtin `!value` will consider the number `0` false and I always find myself making relatively verbose handlers for this case.

I wanted a way to make a union (this type "or" that type) for any number of arbitrary types. I scoured the documentation for this functionality and didn't find it. I was able to write a wrapper function that created this functionality and could've stopped there, but I didn't. I decided to request that this new feature be built into the library.

I filed this issue: <https://github.com/sindresorhus/is/issues/98>

I showed how I implemented the feature and wrote a simple test case to show its usage.

The author (`@sindresorhus` himself) wrote back to say that it seemed useful, but didn't want to add a new function to the API. He asked if I had thoughts or ideas how to make it work with the existing `any` function.

I wasn't expecting him to actually respond! I shook off my surprise and wrote him back to say that I liked what he proposed but didn't want to make it confusing. Didn't hear back for a while.

When he responded, he had "the answer." He wrote a quick test case and said "PR welcome for that." I was IN!

## An unfamiliar codebase

I've used TypeScript before, but I'm pretty inexperienced. Some things I learned:

- [TypeScript type guards](https://www.typescriptlang.org/docs/handbook/advanced-types.html)
- Linting with [xo](https://github.com/xojs/xo)
- The [testing library Ava](https://github.com/avajs/ava)

I didn't feel confident at first, but once I started making changes, I got into the groove.

Ava was really interesting to work with. The library encourages keeping tests _dead simple_. It's a pleasure to write assertions without complex setup. (I plan on writing more about Ava in a future post.)

I got the feature to work, wrote a few test cases, and submitted the pull request.

## The pull request

Here it is: <https://github.com/sindresorhus/is/pull/104>

It was scary working with a team of people I've never worked with before. They started making comments and code suggestions soon after I made the PR.

The types part of TypeScript code was challenging for me. There was a good bit of back and forth about:

- the choice to make a new union type or just inline existing types
- where and when to cast types

I felt nervous about my responses. Impostor syndrome came out full force. I tried to keep it cool, ask clarifying questions, and a handful of changes later, we were all happy with the result.

I noticed something that I didn't realize was possible: the maintainers can change PR titles and descriptions (and some other things that I wrote originally) as they please. I was fascinated by their changes. It's _their_ library, after all, and they _should_ be able to do that to keep the repo history consistent.

## The release of is@2.1.0

It was incredibly rewarding to see that the feature I put in was released shortly after the PR was merged. Use either of these links to learn how to use the library in a project:

> https://github.com/sindresorhus/is
>
> https://www.npmjs.com/package/@sindresorhus/is

I had such a great experience. I'm looking forward to the next time I have the chance to contribute to an awesome, well-maintained open source library. Let me know about your experiences using `is`.
