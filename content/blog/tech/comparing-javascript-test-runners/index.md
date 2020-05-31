---
type: post
title: 'Comparing JavaScript Test Runners'
date: 2020-05-02
categories: ['tech']
tags: ['JavaScript', 'Test Runners', 'AVA', 'Mocha', 'Jest']
author: 'Dave Cohen'
redirect_from:
  - /tech/comparing-javascript-test-runners/
---

![comparing-javascript-test-runners.png](images/comparing-javascript-test-runners.png)

This post is a pointer to an [article I completed recently](https://github.com/scraggo/comparing-javascript-test-runners) - a comprehensive comparison of the AVA, Jest, Mocha, and `mocha-parallel-tests` JavaScript test runners.

> 👉 <https://github.com/scraggo/comparing-javascript-test-runners/> 👈

## Why is it on GitHub, not this blog?

Not only does the repo contain the comparison article, I created a node application to generate the speed metrics in the article. The process looks like this:

- There is a `make-tests` command that generates a number of _identical_ tests for each test runner. The tests take the length of time that a test suite of an average large codebase would take
- The `test-all` command will run the tests and time the output of each one. The order of the runners is shuffled every time to remove any ordering bias
- A report is generated at the end that shows how long each test runner took to run the test suite.

> [See the repo and documentation](https://github.com/scraggo/comparing-javascript-test-runners/).

## Article Preview

Three test runners have risen far above the rest as the most popular choices of JavaScript test runners:

- AVA
- Jest
- Mocha

\*We'll also be exploring a wrapper for Mocha called `mocha-parallel-tests`.

The immediate practical goal of this article is to help you choose a JavaScript testing framework. My aim is to address the following questions:

**How does one choose the right testing framework for their use case? What criteria should one base their decision on?**

In order to do this, we'll explore some general principles regarding both testing frameworks and testing in general. Then, after outlining the criteria for evaluating the frameworks, we can explore them in detail...

**[Continue reading](https://github.com/scraggo/comparing-javascript-test-runners/)...**

## Want to contribute?

Don't hesitate to [contact me](/contact) if you have feedback.

Want to add details or make a correction? This article is open-source and your contributions are 100% welcome 💥

[Open an issue here](https://github.com/scraggo/comparing-javascript-test-runners)
