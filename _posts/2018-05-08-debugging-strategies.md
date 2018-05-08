---
layout: post
title:  "Debugging Strategies"
date:   2018-05-08 19:45:31 +0530
categories: ["computer science"]
author: "Dave Cohen"
---

Tracking down bugs in the software you're working on can be tricky. Debugging is a massive topic and there are so many places bugs can show up. One thing is for sure, whether you're careful or not...

### Bugs will show up.

I'm not saying this to be pessimistic. Creating and squashing bugs is not just a part of the process of writing software, it *is* the process! We're solving problems and ironing out the kinks as we go.

<img src="/assets/bugs.jpg" />

## Bug Species

There are so many types of bugs I've encountered while working on projects. Here's a checklist I've found helpful when stuck on an issue I can't solve:
- Types: Document the inputs and validate where needed.
- Return values: Document the outputs and always return promises.
- Side Effects: Be aware of them and/or prevent them by not mutating data inputs.
- 'this' context: Arrow functions (ES6) preserve the execution context. 
- Importing / Exporting: Be careful to not destructure connected components.
- Filesystem: Take care to be in the right directory.
- Corrupted / outdated projects: Sometimes a reinstall or rebuild is necessary.
- Missing Knowledge: Find the 'good' parts of the docs.
- Problem scope is too big: Divide and conquer - delete code until it works.
- Complexity: Where many parts depend on each other and their interaction is difficult to manage.
- Famously Horrible: If lives are at stake, do be thorough.
- Poorly communicated specs: Make sure that what you're working on useful and requested features.
- Lack of tests: We all write vulnerable code if we don't continually ask "How can I test this?"

Some examples of these bugs and strategies to keep in mind while tackling these are below. They are mostly React / Javascript examples, but I'm sure they apply to other languages and frameworks.

### Types (like String, Int, Array, etc)

When you're working in a language that doesn't enforce types (like Python or Javascript), these are very common. Dynamically typed languages allow you to put whatever types you want into function arguments. For example:

```js
// without validation
function add(x,y) {
  return x + y
}

add(1,2);// -> 3
add('1','2');// -> '12'
add('hi ','everyone');// -> 'hi everyone'
```

Javascript doesn't care that we put in 'number' types in the first call to `add` and 'string' types in the second and third calls to `add`. This seems very basic, but we might want to avoid the case where we accidentally put in '1' and '2' (both strings) as parameters and get '12' as the output. To get around this bug, we could coerce, then validate the inputs to be the types we're looking for.

```js
// with input validation / coercion
function add(x,y) {
  x = Number(x);
  y = Number(y);
  if (!isNaN(x) && !isNaN(y)) {
    return x + y
  }
  throw new TypeError('Function arguments expected type number');
}

add(1,2);// -> 3
add('1','2');// -> 3
add('hi ','everyone');// -> throws error
```

Now our function is targeted towards specific inputs, but flexible to allow strings and numbers.

The other way to solve this problem would be to ensure that the data going in is always the correct type. We could abstract the validation and coercion into a separate function:

```js
function validateNum(input) {
  input = Number(input);
  if (isNaN(input)) {
    throw new TypeError('Function arguments expected type number');
  }
  return input;
}
```

This way, we can use our original add function and validate the inputs separately:
```js
add(validateNum('1'), validateNum('2'))
```

\* Want to avoid this problem entirely in Javascript? Try [TypeScript](https://medium.freecodecamp.org/typescript-javascript-with-super-powers-a333b0fcabc9)!

### Forgot to return values

It happens. We can be forgetful. The way around this problem is through making a habit of documenting a function.
- print values (console.log) instead of returning
- remember to return a promise so you can .then off of it (there are literally no advantages to not returning the promise)

### Side effects - accidentally morphing arrays or objects in functions
Let's say you have an array. You want to sort it in a helper function for some reason, but keep access to its unsorted order. You write a function that takes the array as an input:
```js
function sortAndOtherStuff(array) {
  const sortedArray = array.sort();//whoops, we modified the input
  // do stuff with sortedArray
  return sortedArray
}
```

Now, while iterating over the array in a different function, you find that it's behaving erratically:
```js
for (let i = 0; i < array.length; i++) {
  if (i === 2) {
    // do some magic with array[i] and sortAndOtherStuff(array)
  }
}
```

You can see that we accidentally modified the input in the `sortAndOtherStuff` function. It would've been better to make a "pure" function that doesn't mutate the input:
```js
function sortAndOtherStuff(array) {
  const sortedArray = [...array].sort();//that's better. we made a copy with the spread ... operator
  // do stuff with sortedArray
  return sortedArray
}
```

In React, it can be frustrating when you change state and expect the component to re-render. Be careful if you're expecting an array or object to update state in React. State is immutable, so you have to return a copy (like we did with the `[...array]` spread operation above) of those to get state to update!

### 'this' (arrow functions vs function declarations in Javascript)
Coding is very specific. One simple word can disrupt an entire application. In this case, it's 'function'. In the callback functions of event handlers, the use of an arrow function expression (ES6 Javascript) will enforce the 'this' context of the event handling function. Using a function declaration (with the 'function' keyword) will create a new 'this' context for that function. This minor syntax will prevent a handler from firing properly. Recently, I got tripped up because of a callback function *inside* of an event handler that used a function declaration:
```js
class MyClass extends Component {
  constructor(props) {
    super(props)
    this.state = {
      myData: []
    }
    // this binds the context correctly
    this.handleChange = this.handleChange.bind(this)
  }
  alterData(newData) {
    return newData + Math.random();
  }
  handleChange() {
    // since we used .bind above, 'this' is the correct context 'MyClass'
    this.setState({myData: new Cool_Library.Method(function(event) {
      // since we used the 'function' keyword in this callback function,
      // we'll get an error like: "this.alterData is not a function"
      this.alterData(event.property)
      });
    }
  }
  render() {
    return (
      <MyInput
          onChange={ this.handleChange }
      />
    )
  }
}
```

With a minor syntax change and removal of the word 'function', this was resolved:
```js
this.setState({myData: new Cool_Library.Method((event) => {
```

I could've also used `.bind(this)`:
```js
// ...
this.alterData(event.property)
      }).bind(this)
// ...
```

### Importing / Exporting
I enjoy the small time-savings and keystroke-savings that come with a lot of ES6 syntaxes. `import` and `export`, which replace `require()` and `module.exports` are two that I use regularly when developing in React. I also use destructuring while importing: [import - JavaScript | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import)

One danger here is writing code one way to `import {ComponentName}` and later adding the `connect` function from 'react-redux'. It's a bit of a silly mistake, but I needed to change the above import to `import ComponentName`. The application still "worked", but it was behaving oddly. This was a silly bug, but it took quite a while to track down. Two little curly braces.

There are so many opportunities to forget to export data or to import data incorrectly. I've been adding comments on usage below my export statements to be more deliberate about how it needs to be imported:

```js
module.exports = coolObject;
/* USAGE:
import { fetchData } from './coolObject';
fetchData.then(res => { etc })
*/
```

### Being in the wrong part of the filesystem

Ever caught yourself yourself in the wrong directory when...
- trying to install packages from npm
- trying to import a file
- trying to initialize a git repo

It's just always good to do a sanity check by asking "Am I in the right directory?"

### Corrupted / outdated projects
Sometimes a reinstall or rebuild is necessary. Update packages.
### Missing Knowledge
Programmers are constantly learning. It's inevitable that you find yourself working in a technology that you're not too familiary with. So naturally, by writing your code incorrectly, bugs will pop up. The solution to this boils down to finding the right resources and studying them efficiently. There's no quick fix here. Sometimes finding the 'good' parts of the docs is difficult.

A story as an example: The more I used the 'react-redux' library, the more I loved it. I had used Redux inside of React without it, but forgot some of the syntax while working on a project (including `subscribe` and `getState` methods in the mounting methods.) I hunted through the Redux documentation and couldn't find the syntax. They skip right to using the 'react-redux' library without those low-level connections. In this case, there was no good documentation besides the example projects I had. So sometimes, the best documentation is your own notes. Which I should've made.

### Problem scope is too big
Divide and conquer - delete code until it works.
### Complexity
Where many parts depend on each other and their interaction is difficult to manage.
- service workers don't work in Electron (threading)
- modal wouldn't render (needed its own state)
- component doesn't update with new data (the listener was not being rendered in all the pages)

### Famously Horrible Bugs
When working on software that has potentially deadly outcomes, being keenly aware of the limitations of computers is necessary. Small rounding errors in [floating point numbers](https://docs.oracle.com/cd/E19957-01/806-3568/ncg_goldberg.html) happen in *every programming language.* Sadly, there are too many examples of these types of complicated bugs: [List of software bugs - Wikipedia](https://en.wikipedia.org/wiki/List_of_software_bugs)

### Poorly communicated specs
Make sure that what you're working on useful and requested features.
### Lack of tests
We all write vulnerable code if we don't continually ask "How can I test this?"

## Parting thoughts

I hope this simple guide to debugging will be helpful in your future projects. Please [contact me](https://scraggo.github.io/contact/) if you'd like to discuss anything I've written here. May your bugs be few and easy to squash!

- [Read more about Tech Effects here](https://scraggo.github.io/about/)