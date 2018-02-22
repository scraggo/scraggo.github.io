---
layout: post
title:  "Hash Tables in JavaScript"
date:   2018-02-20 19:45:31 +0530
categories: ["javascript", "computer science"]
author: "Dave Cohen"
---

## Approaches to Problems

I have been intrigued and intimidated by algorithms and data structures since first learning about them. I've been attempting problems that can be solved with hash tables. I'm hoping that sharing my approaches can help me and others make bigger strides in conquering these challenging problems.

## Why Hash Tables?

While attending Fullstack Academy, I participated in an algorithms class taught by alumnus Clément Mihailescu. I found the class to be enlightening and engaging. I was partially star-struck because he works at Google. He founded [AlgoExpert](https://www.algoexpert.io/) which is a top-notch platform for practicing interview problems. I highly recommend it for those who are serious about acing their interviews. I was inspired by the power of hash tables after the class and I did around 5 problems of various difficulty on LeetCode.

## A Brief Introduction to Hash Tables

According to Wikipedia:
> In computing, a hash table (hash map) is a data structure which implements an associative array abstract data type, a structure that can map keys to values. A hash table uses a hash function to compute an index into an array of buckets or slots, from which the desired value can be found.

> Ideally, the hash function will assign each key to a unique bucket, but most hash table designs employ an imperfect hash function, which might cause hash collisions where the hash function generates the same index for more than one key. Such collisions must be accommodated in some way.

To the uninitiated, this explanation may seem high-falutin. Fortunately, if you've worked with *objects* in JavaScript, you've already worked with an associative array data type.

```js
// association: a "key" maps to a "value"
// in this case, "b" is the key and "2" is the value:
const mapB = {b: 2}

// using .reduce() to count the occurrence of characters:
// association: charactor: number
const count = Array.from('aabbccddeee').reduce((accumulator, char) => {
  if (char in accumulator) {
    accumulator[char]++
  } else {
    accumulator[char] = 1
  }
  return accumulator
}, {})

// result:
// {a: 2, b: 2, c: 2, d: 2, e: 3}
```

JavaScript, being a high-level language, takes care of the hashing function details under-the-hood. The "buckets" in this case are a contiguous array where each index (bucket) is a point of destination for data. 

## Hashing Functions

To point data to the right "bucket", a *hashing function* is used. The function allows us to:
- calculate a unique (mostly) hash address from a given "key"
- use this hash address to put a "key" in the same "bucket" and access it from there every time we need to. 

In the average case scenario, searching a hash table is an O(1) operation. That's amazing in terms of efficiency!

- [Big-O Algorithm Complexity Cheat Sheet @ericdrowell](http://bigocheatsheet.com/)
- [Hashing GeeksforGeeks](https://www.geeksforgeeks.org/hashing-set-1-introduction/)
- [Hash Table Map Data Structure | Interview Cake](https://www.interviewcake.com/concept/java/hash-map)

## Coding Challenge Sites: Leetcode, Hackerrank, Codewars, and more

There are many great "code challenge" websites to practice at computer science problems. [HackerRank](https://www.hackerrank.com/) has been my favorite for quite a while. The "Data Structures" and "Algorithms" tracks are phenomenal. I also enjoyed "10 Days of JavaScript." [Codewars](https://www.codewars.com/) has an excellent community and platform, as well as some very fun problems. When I wanted to work more with hash tables, I discovered that [LeetCode](https://leetcode.com/) has a tagging system which links to 81 hash table problems!
- [Hash Table - LeetCode](https://leetcode.com/tag/hash-table/)

## Easy Problem: Word Pattern

Description: [Word Pattern - LeetCode](https://leetcode.com/problems/word-pattern/description/)

Basic Gist: If a pattern (like 'abba') matches an input string (like 'dog cat cat dog') then it's a match. ('dog cat cat fish' wouldn't be a match.)

My Solution Stats:
> Status: Accepted. 33 / 33 test cases passed. Runtime: 48 ms

```js
/**
 * @param {string} pattern
 * @param {string} str
 * @return {boolean}
 */
var wordPattern = function(pattern, str) {
  if (pattern === '' || str === '') return false;
  const arrStr = str.split(' ');
  if (arrStr.length !== pattern.length) return false;
  let patternHash = {};
  let wordHash = {};
  for (let i = 0; i < arrStr.length; i++) {
    if (!patternHash.hasOwnProperty(pattern[i]) && !wordHash[arrStr[i]]) {
      // add the pattern letter to hash table, mapped to current word
      patternHash[pattern[i]] = arrStr[i];
      // make sure current word is accounted for
      wordHash[arrStr[i]] = true;
    } else {
      // check if the word in the pattern hash matches the current word
      if (patternHash[pattern[i]] !== arrStr[i]) {
        return false;
      }
    }
  }
  return true;
};
```

Explanation:
- the first 3 lines are guards against invalid input and split the input `str` into an array which was separated by spaces.
- `patternHash` and `wordHash` will keep track of slightly different things. (I'll explain as I go.)
```js
// patternHash example: { a: 'dog', b: 'cat' }
// wordHash example: { dog: true, cat: true }
```
- we use a `for` loop to iterate over the entire input string as array.
- the first `if` block checks 2 things have NOT happened yet:
  1. if we've mapped a word to a letter in the pattern string.
  2. if we've accounted for the current word - which is `arrStr[i]`.
  - if neither has happened, we can safely initialize both hashes. (as described above).
- `else` block: now is the moment of truth. If `patternHash[pattern[i]]` doesn't match up with `arrStr[i]`, we can definitively `return false`. We don't have an exact match of pattern to words.
- finally, if the `for` loop has completed, we can safely `return true`. We have a match!

Reflection: This certainly works, but I can probably do this with only one hash table. `{dog: true}` doesn't have extra meaningful data and between my two hashes, I store each word twice.


# TEMPLATE
## Easy Problem: NAME

Description: MARKDOWN LINK

Basic Gist: SUMMARY OF PROBLEM

My Solution Stats:
> Status: Accepted. 33 / 33 test cases passed. Runtime: 48 ms

```js
COPY CODE HERE
```

Explanation:
BULLET POINTS

Reflection: HOW I CAN DO BETTER

# TEMPLATE
## Easy Problem: NAME

Description: MARKDOWN LINK

Basic Gist: SUMMARY OF PROBLEM

My Solution Stats:
> Status: Accepted. 33 / 33 test cases passed. Runtime: 48 ms

```js
COPY CODE HERE
```

Explanation:
BULLET POINTS

Reflection: HOW I CAN DO BETTER

# TEMPLATE
## Easy Problem: NAME

Description: MARKDOWN LINK

Basic Gist: SUMMARY OF PROBLEM

My Solution Stats:
> Status: Accepted. 33 / 33 test cases passed. Runtime: 48 ms

```js
COPY CODE HERE
```

Explanation:
BULLET POINTS

Reflection: HOW I CAN DO BETTER

# TEMPLATE
## Easy Problem: NAME

Description: MARKDOWN LINK

Basic Gist: SUMMARY OF PROBLEM

My Solution Stats:
> Status: Accepted. 33 / 33 test cases passed. Runtime: 48 ms

```js
COPY CODE HERE
```

Explanation:
BULLET POINTS

Reflection: HOW I CAN DO BETTER

**More**

This "enrichment piece" was written as a student at Fullstack Academy. 

- [Read more about me here](https://scraggo.github.io/about/)
- [Contact me](https://scraggo.github.io/contact/) to discuss this blog post
- See my [Resumé](https://scraggo.github.io/resume/) and [Portfolio](https://scraggo.github.io/portfolio/)
