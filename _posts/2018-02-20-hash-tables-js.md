---
layout: post
title:  "Hash Tables in JavaScript"
date:   2018-02-20 19:45:31 +0530
categories: ["javascript", "computer science"]
author: "Dave Cohen"
---

## Some Hash Table Problem Approaches

My intention is to share what I've learned about hash tables and some approaches to coding problems I've encountered recently. As a mostly self-taught developer, I have been intrigued and intimidated by algorithms and data structures since first learning about them. I'm hoping that sharing my perspective can help me and others make bigger strides in conquering them.

## A Brief Introduction to Hash Tables

According to Wikipedia:
> In computing, a hash table (hash map) is a data structure which implements an associative array abstract data type, a structure that can map keys to values. A hash table uses a hash function to compute an index into an array of buckets or slots, from which the desired value can be found.

> Ideally, the hash function will assign each key to a unique bucket, but most hash table designs employ an imperfect hash function, which might cause hash collisions where the hash function generates the same index for more than one key. Such collisions must be accommodated in some way.

To the uninitiated, this explanation may seem high-falutin. Fortunately, if you've worked with *objects* in JavaScript, you're more than halfway there in understanding hash tables.

```js
// a "key" maps to a "value"
// in this case, "b" is the key and "2" is the value:
const mapB = {b: 2}

// using .reduce() to count the occurrence of characters:
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

JavaScript, being a high-level language, takes care of the implementation details under-the-hood. The "buckets" in this case are a contiguous array where each index (bucket) is a point of destination for data. 

## Hashing Functions

To point data to the right "bucket", a *hashing function* is used. The function allows us to:
- calculate a unique (mostly) hash address from a given "key"
- use this hash address to put a "key" in the same "bucket" and access it from there every time we need to. 

In the average case scenario, searching a hash table is an O(1) operation. That's amazing in terms of efficiency!

- [Big-O Algorithm Complexity Cheat Sheet @ericdrowell](http://bigocheatsheet.com/)
- [Hashing GeeksforGeeks](https://www.geeksforgeeks.org/hashing-set-1-introduction/)
- [Hash Table Map Data Structure | Interview Cake](https://www.interviewcake.com/concept/java/hash-map)

## Coding Challenge Sites: Leetcode, Hackerrank, Codewars, and more

There are many great "code challenge" websites to practice hacking away at computer science problems. [HackerRank](https://www.hackerrank.com/) has been my favorite for quite a while. The "Data Structures" and "Algorithms" tracks are phenomenal. I also enjoyed "10 Days of JavaScript." [Codewars](https://www.codewars.com/) has an excellent community and platform, as well as some very fun problems. When I wanted to work more with hash tables, I discovered that [LeetCode](https://leetcode.com/) has a tagging system which links to 81 hash table problems!
- [Hash Table - LeetCode](https://leetcode.com/tag/hash-table/)

While attending Fullstack Academy, I participated in an algorithms class taught by alumnus Clément Mihailescu. I found the class to be enlightening and engaging. I was partially star-struck because he works at Google. He founded [AlgoExpert](https://www.algoexpert.io/) which is a top-notch platform for practicing interview problems. I highly recommend it for those who are serious about acing their interviews. I was inspired by the power of hash tables after the class and I did around 6 problems on LeetCode.

**More**

This blog post was written to fulfill a requirement for the Fullstack Academy. 

- [Read more about me here](https://scraggo.github.io/about/)
- [Contact me](https://scraggo.github.io/contact/) to discuss this blog post
- See my [Resumé](https://scraggo.github.io/resume/) and [Portfolio](https://scraggo.github.io/portfolio/)
