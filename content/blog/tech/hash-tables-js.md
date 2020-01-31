---
type: post
title: 'Tackling Hash Table Problems in JavaScript'
date: 2018-02-20 19:45:31 +0530
categories: ['tech']
tags: ['javascript', 'computer science']
author: 'Dave Cohen'
redirect_from:
  - /tech/hash-tables-js/
  - /javascript/computer%20science/2018/02/20/hash-tables-js.html
  - /javascript/computer_science/2018/02/20/hash-tables-js.html
---

Algorithms and data structures can be intimidating. The goal of this post is to explain some approaches to solving hash table algorithm problems providing clear examples with detailed solution explanations. I'm hoping this will help anyone uninitiated alleviate fears and make bigger strides in conquering these challenging problems.

## Why Hash Tables?

While attending Fullstack Academy, I participated in an algorithms class taught by alumnus Clément Mihailescu, an employee of Google. I found the class to be enlightening and engaging. (I was also star-struck because he works at Google.) He founded [AlgoExpert](https://www.algoexpert.io/) which is a top-notch platform for practicing interview problems. I highly recommend it for those who are serious about acing their interviews. I was inspired by the power of hash tables after the class and went on a journey to solve as many hash table problems as I could find.

## A Brief Introduction to Hash Tables

According to Wikipedia:

> In computing, a hash table (hash map) is a data structure which implements an associative array abstract data type, a structure that can map keys to values. A hash table uses a hash function to compute an index into an array of buckets or slots, from which the desired value can be found.

> Ideally, the hash function will assign each key to a unique bucket, but most hash table designs employ an imperfect hash function, which might cause hash collisions where the hash function generates the same index for more than one key. Such collisions must be accommodated in some way.

To the uninitiated, this explanation may seem high-falutin. Fortunately, if you've worked with _objects_ in JavaScript, you've already worked with an associative array data type.

```js
// association: a "key" maps to a "value"
// in this case, "b" is the key and "2" is the value:
const mapB = { b: 2 };

// using .reduce() to count the occurrence of characters:
// association: character: number
const count = Array.from('aabbccddeee').reduce((accumulator, char) => {
  if (char in accumulator) {
    accumulator[char]++;
  } else {
    accumulator[char] = 1;
  }
  return accumulator;
}, {});

// result:
// {a: 2, b: 2, c: 2, d: 2, e: 3}
```

### Hashing Functions

JavaScript, being a high-level language, abstracts away some of the hash function details. The "unique buckets" referred to above are a contiguous array where each index (bucket) is a point of destination for data.

To point data to the right "bucket", a _hashing function_ is used. The function allows us to:

- calculate a unique (mostly) hash address from a given "key"
- use this hash address to put a "key" in the same "bucket" and access it from there every time we need to

In the case where collisions are minimized, searching a hash table is an O(1) operation. That's amazing in terms of efficiency! See below for more on "Big-o" and in-depth hash table lessons.

- [Big-O Algorithm Complexity Cheat Sheet @ericdrowell](http://bigocheatsheet.com/)
- [Hashing GeeksforGeeks](https://www.geeksforgeeks.org/hashing-set-1-introduction/)
- [Hash Table Map Data Structure - Interview Cake](https://www.interviewcake.com/concept/java/hash-map)

### Coding Challenge Sites: Leetcode, Hackerrank, Codewars, and more

There are many great "code challenge" websites to practice at computer science problems. When I wanted to work more with hash tables, I discovered that [LeetCode](https://leetcode.com/) has a tagging system which links to 81 hash table problems!

- [Hash Table - LeetCode](https://leetcode.com/tag/hash-table/)

Other great sites for coding challenges:

- [HackerRank](https://www.hackerrank.com/) my general favorite. The "Data Structures" and "Algorithms" tracks are phenomenal. I also enjoyed "10 Days of JavaScript."
- [Codewars](https://www.codewars.com/) - has an excellent community and platform, as well as some very fun problems.

## Summary of Approaches

After solving around 6 problems of various difficulty on LeetCode, I observed some general principles and forms:

- Hash tables allow for very fast, O(1), lookups. If my solution to a problem was "timing out," I was probably over-using array methods.
- Nested `for` loops (which have O(n^2) time efficiency) can often be alleviated with hash tables.
- It's often necessary to make two passes through an array to gather the hash table data to allow for complete processing.
- It's sometimes possible to make a single pass if by the end of the pass, you have all the data you need for processing.

Javascript objects (what I've used for hash tables) are extremely versatile. I was able to implement them with the following patterns:

- a "map" of one data type to another: `{a: 'dog'}`
- the "visited" pattern: `{1: true}`. You can also use a `Set` for this.
- the "count" or "accumulator" pattern: `{a: 2, b: 12}`. This can be implemented with `.reduce()` or a simple `for` loop.

## Word Pattern (tagged as 'Easy')

Link to problem & description: [Word Pattern - LeetCode](https://leetcode.com/problems/word-pattern/description/)

Basic Gist: If a pattern (like 'abba') matches an input string (like 'dog cat cat dog') then it's a match. ('dog cat cat fish' wouldn't be a match.)

My Solution Stats:
_Status: Accepted. 33 / 33 test cases passed. Runtime: 48 ms_

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

## Two Sum (tagged as 'Easy')

Link to problem & description: [Two Sum - LeetCode](https://leetcode.com/problems/two-sum/description/)

Basic Gist: Given an array of integers, return indices of the two numbers such that they add up to a specific target. (target could be 9, for example.)

My Solution Stats:
_19 / 19 test cases passed. Status: Accepted. Runtime: 84 ms_

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
      hashed[n] = [hashed[n], i];
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
        return check.slice(0, 2);
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

## Single Number (tagged as 'Easy')

Link to problem & description: [Single Number - LeetCode](https://leetcode.com/problems/single-number/description/)

Basic Gist: Given an array of integers, every element appears twice except for one. Find that single one.

My Solution Stats:
_15 / 15 test cases passed. Status: Accepted. Runtime: 84 ms_

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

## Set Mismatch (tagged as 'Easy')

Link to problem & description: [Set Mismatch - LeetCode](https://leetcode.com/problems/set-mismatch/description/)

Basic Gist: You have to find where "an error occurred." Any given input will have a number missing and a number duplicated. Example: `[1,2,2,4]`

My Solution Stats:
_49 / 49 test cases passed. Status: Accepted. Runtime: 84 ms_

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

- This problem was difficult to optimize because the input numbers were not necessarily sorted. There were a few short cases that needed to be accounted for. Note: `result[0]` is the duplicated number and `result[1]` is the missing number.
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

## Longest Harmonious Subsequence (tagged as 'Easy')

Link to problem & description: [Longest Harmonious Subsequence - LeetCode](https://leetcode.com/problems/longest-harmonious-subsequence/description/)

Basic Gist: Return the length of the longest sequence of 2 unique numbers which are consecutive. Example subsequences: `[3,2,2,2,3]`, `[3,2,3,2,3]`, `[3,3,3,2,2,2]`. (Other numbers in between aren't counted.) (This one's a bit difficult to summarize, so check out the problem description.)

My Solution Stats:
_201 / 201 test cases passed. Status: Accepted. Runtime: 108 ms_

```js
/**
 * @param {number[]} nums
 * @return {number}
 */
var findLHS = function(nums) {
  let hash = {};
  let current;
  let i;
  let max = 0;
  let maxCheck1 = 0;
  let maxCheck2 = 0;
  for (i = 0; i < nums.length; i++) {
    current = nums[i];
    if (current in hash) {
      hash[current]++;
    } else {
      hash[current] = 1;
    }
    if (hash[current + 1]) {
      maxCheck1 = hash[current] + hash[current + 1];
    }
    if (hash[current - 1]) {
      maxCheck2 = hash[current] + hash[current - 1];
    }
    max = Math.max(max, maxCheck1, maxCheck2);
  }

  return max;
};
```

Explanation:

- The `hash` in this problem stores a number as unique key and the number of times it occurs as the value.
- I initialized all the variables outside of the loop. It isn't necessary to do it this way, I just felt like it.
- The `for` loop is the main scene of this algorithm. I iterate over all of the numbers in the input array.
  - The current number is stored in the `current` variable.
  - The first `if` block checks if the current number is in the hash table. If so, we increase it's value by 1. If not, we initialize it to be 1.
  - The second `if` block checks if the current number plus 1 is in the hash table. If so, we store the total number of occurrences of `current` and `current + 1` in the `maxCheck1` variable. (This will be used soon below.)
  - The third and final `if` block checks if the current number minus 1 is in the hash table. If so, we store the total number of occurrences of `current` and `current - 1` in the `maxCheck2` variable. (This will be used soon below.)
  - `max` is the maximum of `max`, `maxCheck1`, and `maxCheck2`. `max` represents the length of the longest sequence.

Reflection: I first implemented this solution in 2 passes. After seeing the official solution, I decided to wrangle mine into the single pass version. There's even more I could do to clean it up, but I'm pretty happy with it.

Official Solution: [Longest Harmonious Subsequence - LeetCode](https://leetcode.com/problems/longest-harmonious-subsequence/solution/)

- Note: It may be locked until you try to solve it!

## Parting Notes

I'm no expert at algorithms in general, but I'm definitely enjoying learning about them. The more I learn, the more I'm able to visualize different approaches to problems and begin to optimize my solutions. Please contact me below if you have comments about this article and/or suggestions for improvement.

_This "enrichment piece" was written as a student at Fullstack Academy._
