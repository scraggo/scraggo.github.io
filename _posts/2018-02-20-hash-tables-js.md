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

Link to problem & description: [Word Pattern - LeetCode](https://leetcode.com/problems/word-pattern/description/)

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


## Easy Problem: Two Sum

Link to problem & description: [Two Sum - LeetCode](https://leetcode.com/problems/two-sum/description/)

Basic Gist: Given an array of integers, return indices of the two numbers such that they add up to a specific target. (target could be 9, for example.)

My Solution Stats:
> 19 / 19 test cases passed. Status: Accepted. Runtime: 84 ms

```js
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let hashed = {};
    nums.forEach((n, i) => {
      if (!hashed.hasOwnProperty(n)) {
        hashed[n] = i;
      } else {
        hashed[n] = [hashed[n], i]
      }
    });
    let hashedKeys = Object.keys(hashed);
    let i = 0;
    for (i; i < nums.length; i++) {
        let subtractor = target - +hashedKeys[i];
        if (subtractor in hashed) {
          let check = hashed[hashedKeys[i]];
          if (!Array.isArray(check)) {
            return [check, hashed[subtractor]];
          } else {
            return check.slice(0,2);
          }
            
        }        
    }
};
```

Explanation:
- I begin by initializing a hash object to store the numbers as unique keys. For the values, each number key initially maps to its index. If there are multiples of a number key, I store an array of the indices. Each value can only be used once, so this prepares for the solution format (which asks for an array of two indices).
- `hashedKeys` is the hash converted to an array of its keys.
- the `for` loop iterates over all the numbers in the array. Everything below runs inside the loop.
- the `subtractor` is the number we're looking for to add with the current number to see if it adds up to the `target`. I saved it in a variable for easier readability going forward.
- Now for the main `if` block which checks if the `subtractor` is present in the hash.
- the `check` variable will be type checked. 
  - If we have a number, that means it's unique and we can return in the array format requested. 
  - If it's an array, that means the values are equivalent, and we can return what we initially stored. I do a slice to ensure that it's the correct length.

Reflection: I worked on this problem 5 months before working on it recently. I unknowingly created an O(n^2) algorithm by using `indexOf` to check the entire array sliced at each index as I iterated over it. The runtime was 548 ms (more than 5 times slower than the hash solution.) I think I can improve my hash solution by implementing it without `Object.keys(hash)`. I can't actually explain (at the moment) why I used that, and didn't use `nums[i]`.

Note: I used the "Two Pass" solution. Read more about that and other solutions here: [Two Sum - LeetCode Articles](https://leetcode.com/articles/two-sum/). It may be locked until you've solved it yourself.

## Easy Problem: Single Number

Link to problem & description: [Single Number - LeetCode](https://leetcode.com/problems/single-number/description/)

Basic Gist: Given an array of integers, every element appears twice except for one. Find that single one.

My Solution Stats:
> 15 / 15 test cases passed. Status: Accepted. Runtime: 84 ms

```js
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  let once = new Set();
  nums.forEach(num => {
    if (!once.has(num)) {
      once.add(num);
    } else {
      once.delete(num);
    }
  });
  return Array.from(once)[0];
};
```

Explanation:
- I realized I could use a `Set` to handle storing unique numbers and for fast lookup.
- Using a `forEach` loop:
  - The first time a number has been seen, I store it in the `once` set.
  - If the number had been seen before, I delete it from the `once` set.
- Assuming our inputs are valid, we return the only element in the `once` set. We get to it by converting it to an array with `Array.from()` and getting the `[0]` element.

Reflection: Initially, I created two hashes to make sure the algorithm was running correctly. I realized I could use a `Set` later and and simply delete the `num` entry in `once`, without storing it in `twice`. Oddly enough, my runtime went from 64ms to 84ms with the `Set` implementation. Maybe objects are optimized to run more quickly than sets (?)

Note: there is a very nice solution explanation here: [Single Number - LeetCode Articles](https://leetcode.com/articles/single-number/). It may be locked until you've solved it yourself.

## Easy Problem: Set Mismatch

Link to problem & description: [Set Mismatch - LeetCode](https://leetcode.com/problems/set-mismatch/description/)

Basic Gist: You have to find where "an error occurred." Any given input will have a number missing and a number duplicated. Example: `[1,2,2,4]`

My Solution Stats:
> 49 / 49 test cases passed. Status: Accepted. Runtime: 84 ms

```js
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function(nums) {
  let visited = {};
  let result = [null, null];
  let max = 0;
  for (let i = 0; i < nums.length; i++) {
    let current = nums[i];
    if (!visited[current]) {
      visited[current] = true;
    } else {
      // current is the duplicated number
      result[0] = current;
    }
    if (current > max) {
      max = current;
    }
  }

  current = max;
  while (current > 1) {
    let oneBefore = current - 1;
    if (!visited[oneBefore]) {
      // oneBefore is the skipped number
      result[1] = oneBefore;
      return result;
    }
    current--;
  }
  if (!result[1]) {
    result[1] = max + 1;
    return result;
  }
  return result;
};
```

Explanation:
- This problem was deceptively difficult since the input numbers were not necessarily sorted. There were a few short cases that needed to be accounted for. Note: `result[0]` is the duplicated number and `result[1]` is the missing number.
  - input `[2,2]` expected `[2,1]` output.
  - input `[1,1]` expected `[1,2]` output.
  - I'll describe further down how I accounted for this.
- `visited` is our initialized hash. We'll set a given number as a key and 'true' as the value to keep track of us visiting the number.
- `result` is an array initialized with 2 `null` values. This way, I was forcing myself to update it without having an accidental solution.
- `max` is the highest number in the array. I wanted to avoid sorting, so the highest number in the array would be where I search from to find the missing number. More below.
- the `for` loop iterates over all the numbers.
  - If the number isn't in `visited`, add it to it.
  - If the number is in `visited`, it's the duplicated number. We save it as `result[0]`.
  - I check all numbers and store it in `max` if it's the highest so far.
- The `while` loop begins at `max` and traverses downward.
  - `oneBefore` is our search, it's simply the current number - 1.
  - If we don't see `oneBefore` in `visited`, it's the missing number! We can assign it to our result and return it.
  - If we do see it, we simply go down and try `current--`.
- After this `while` loop, we now account for the case where both numbers are 1. We know that `result[1]` should be one number higher than max.

Reflection: I feel like the efficiency of the algorithm is quite good. I only store what's necessary. Keeping track of the edge cases was a bit cumbersome for me. I'm sure there's a graceful way to do it without the final check that I do.

Official Solution: [Set Mismatch - LeetCode Articles](https://leetcode.com/articles/set-mismatch/)
- Note: It may be locked until you try to solve it!

# TEMPLATE
## Easy Problem: NAME

Link to problem & description: MARKDOWN LINK

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
