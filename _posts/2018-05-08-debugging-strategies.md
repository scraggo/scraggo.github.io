---
layout: post
title:  "My Checklist of Debugging Strategies"
date:   2018-05-08 19:45:31 +0530
categories: ["computer science"]
author: "Dave Cohen"
---

Tracking down bugs in the software you're working on can be tricky. Debugging is a massive topic and there are so many places bugs can show up. One thing's for sure, whether you're careful or not...

**Bugs will show up.**

I'm not saying this to be pessimistic. Creating and squashing bugs is not just a part of the process of writing software, it *is* the process! We're solving problems and ironing out the kinks as we go.

<img src="/assets/bugs.jpg" />

## The List

There are so many types of bugs I've encountered while working on projects. Here's a checklist I've found helpful when stuck on an issue I can't solve:
- Types: Document the inputs and validate where needed.
- Return values: Document the outputs and always return promises.
- Side Effects: Be aware of them and/or prevent them by not mutating data inputs.
- Filesystem: Take care to be in the right directory.
- Importing / Exporting: Be mindful to destructure non-default modules and *not* destructure connected components.
- Problem scope is too big: Divide and conquer - use a binary search technique and a debugger.
- Corrupted / Outdated Projects: Sometimes a reinstall or rebuild is necessary.
- Missing Knowledge: Rubber duck debugging. Find the 'good' parts of the docs. Use targeted methods of research.
- 'this' Context: Arrow functions (ES6) preserve the execution context. 
- Complexity: Where many parts depend on each other and their interaction is difficult to manage.
- Bad Design / Copy-Paste Errors: Make sure your code isn't egregiously going against S.O.L.I.D, D.R.Y, and other design principles. [5 Principles that will make you a SOLID JavaScript Developer](https://thefullstack.xyz/solid-javascript/)
- Famously Horrible: If lives are at stake, do be thorough.
- Poorly Communicated Specs: Make sure that what you're working on useful and requested features.
- Lack of Tests: We all write vulnerable code if we don't continually ask "How can I test this?"
- Oblique Strategies: Brian Eno is cool. [Oblique Strategies](http://stoney.sb.org/eno/oblique.html) and [Random Oblique Strategies Online](http://www.joshharrison.net/oblique-strategies/)

Some examples of these bugs and strategies to keep in mind while tackling these are below. They are mostly React / Javascript examples, but I'm sure they apply to other languages and frameworks.

### Types (like String, Int, Array, etc)

When you're working in a language that doesn't enforce types (like Python or Javascript), it's quite common to encounter bugs from unexpected types being passed into or returned from a function. Dynamically typed languages allow you to put whatever types you want into function arguments. For example:

```js
// without validation
function add(x,y) {
  return x + y;
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
    return x + y;
  }
  throw new TypeError('Function arguments expected type number');
}

add(1,2);// -> 3
add('1','2');// -> 3
add('hi ','everyone');// -> throws error
```

Now our function is targeted towards specific inputs, but flexible to allow strings and numbers.

Taking this approach further would be to abstract the validation and coercion into a separate function:

```js
function validateNum(input) {
  input = Number(input);
  if (isNaN(input)) {
    throw new TypeError('Expected type number');
  }
  return input;
}
```

This way, we can use our original add function and validate the inputs separately:
```js
add(validateNum('1'), validateNum('2'));
```

\* Want to avoid this problem entirely in Javascript? Here are some popular solutions:
- [TypeScript: Javascript with Super Powers](https://medium.freecodecamp.org/typescript-javascript-with-super-powers-a333b0fcabc9)
- [Flow: A Static Type Checker for JavaScript](https://flow.org/)

### Forgot to return values

It happens. We can be forgetful. The way around this problem is making a habit of documenting a function's inputs and outputs. While documenting, the light bulb may go off in your head that the output is not what you had in mind.
```js
// this function will log result to the console, but return undefined.
function forgetful(num) {
  const otherNum = 6;
  const result = otherNum + num;
  console.log(result);
}

// this function can be used as expected. Notice the documentation.
function rememberedToReturn(num) {
  /*
   * num: number
   * return: number
  */
  const otherNum = 6;
  return otherNum + num;
}

console.log(rememberedToReturn(11));// logs 17 as expected.

```

If you're using promises in your application, it can be frustrating when you try to use `.then` off of a return and you get an error like ".then is not a function." Here's an example with `fetch`:
```js
function fetchMoviesNoReturn() {
  fetch('http://example.com/movies.json')
  .then(function(response) {
    return response.json();
  })
}

fetchMoviesNoReturn().then(function(myJson) {
    console.log(myJson);
  });// throws error
```

Adding a simple return statement before `fetch` solves our problem. 

```js
// ES5
function fetchMovies() {
  return fetch('http://example.com/movies.json')
  .then(function(response) {
    return response.json();
  })
}

// ES6 -> notice the implicit `return`s by omitting the `{}` around the function bodies
const fetchMovies = () =>
  fetch('http://example.com/movies.json')
    .then(response => response.json());

fetchMovies().then(function(myJson) {
    console.log(myJson);
  });// myJson is logged to console.
```

Notice that fancy ES6 syntax. That can trip you up if you're not careful! I always return a promise if possible. I have yet to encounter a disadvantage to not returning a promise.

### Side effects - accidentally morphing arrays or objects in functions
Let's say you have an array. You want to sort it in a helper function for some reason, but keep access to its unsorted order. You write a function that takes the array as an input:
```js
function sortAndOtherStuff(array) {
  const sortedArray = array.sort();//whoops, we modified the input
  // do stuff with sortedArray
  return sortedArray;
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
  return sortedArray;
}
```

In React, it can be frustrating when you change state and expect the component to re-render. Be careful if you're expecting an array or object to update state in React. State is immutable, so you have to return a copy (like we did with the `[...array]` spread operation above) of those to get state to update!

### Being in the wrong part of the filesystem

Ever caught yourself yourself in the wrong directory when...
- trying to install packages from npm
- trying to import a file
- trying to initialize a git repo

It's just always good to do a sanity check by asking "Am I in the right directory?"

### Importing / Exporting
I enjoy the small time-savings and keystroke-savings that come with a lot of ES6 syntaxes. `import` and `export`, which replace `require()` and `module.exports` are two that I use regularly when developing in React. I also use destructuring while importing: [import - JavaScript | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import)

One danger here is writing code one way to `import {ComponentName}` and later adding the `connect` function from 'react-redux'. I've made this silly mistake multiple times! The applications would "work", but behave oddly. All I needed to do was change the above import to `import ComponentName`. These silly little bugs can take a while to track down and make you smack yourself in the forehead when you find them. Coding is very specific. One simple word or two little curly braces can disrupt an entire application.

There are so many opportunities to forget to export data or to import data incorrectly. I've been adding comments on usage below my export statements to be more deliberate about how it needs to be imported:

```js
module.exports = coolObject;
/* USAGE:
import { fetchData } from './coolObject';
fetchData.then(res => { etc })
*/
```

### Problem scope is too big

One of the most powerful searching algorithms is called "Binary Search." We start by searching the middle of a sorted data set. If the number is too high, we search the first half of the data set. If it's too low, we search the second half. We repeat this process of splitting the search space in half until we've reached our target (or don't find it.) Think of this as "divide and conquer."

We need a slight variation on this to be helpful with debugging. Our application isn't "sorted," but we can arbitrarily assign "halves" to the application. A basic approach is putting in `print` or `console.log` statements in the "first half" of your application. If it's behaving as expected, then you can be sure the problem is in your "second half."

My real-world example of this: I was working with a giant `render` function in a React component. It was throwing an error about React being unable to render an object. There were so many objects in the code and the error wasn't showing the line number. To "divide and conquer" this problem, I removed code from the second half of the code. It didn't work, so I removed code in the second half of the first half. And so on. Once the code worked, I could examine the code I recently removed closely and carefully, instead of parsing the giant function squinting at hundreds of lines of code with my feeble human eyes.

If there are too many interconnected pieces, we might not be fortunate enough to be able to just delete code. In this case, we should consider using a debugger. This powerful tool allows us to insert breakpoints where we think the code is acting up.
> [Debugging in Chrome](https://javascript.info/debugging-chrome)

Another approach might be to make a mini-project that isolates the problem. Sometimes the act of isolating the problem can be key in solving it. It takes time to do this, but can greatly enhance your understanding of the problem.

### Corrupted / outdated projects
Sometimes a reinstall or rebuild is necessary. You might need to update some packages. This post is a guide to a basic node module rebuild with some info on updating: [node.js - How do you reinstall an app's dependencies using npm? - Stack Overflow](https://stackoverflow.com/questions/12866494/how-do-you-reinstall-an-apps-dependencies-using-npm)

I'm dealing with a dependency of a dependency issue now. If you're an expert on npm and peer dependencies, please contact me!

### Missing Knowledge
Programmers are constantly learning. It's inevitable that you find yourself working in a technology that you're not too familiar with. So naturally, by writing your code incorrectly, bugs will pop up. The solution  boils down to finding the right resources and studying them efficiently. There's no quick fix here. Sometimes finding the 'good' parts of the docs is difficult.

A story as an example: The more I used the 'react-redux' library, the more I loved it. I had used Redux inside of React without it, but forgot some of the syntax while working on a project (including `subscribe` and `getState` methods in the mounting methods.) I hunted through the Redux documentation and couldn't find a simple example using the more verbose syntax. They skip right to using the 'react-redux' library without explicit instructions on using it without. In this case, there was no good documentation besides the example projects I had. So sometimes, the best documentation is your own notes. Which I should've made.

Before doing your research, try the famous ["Rubber Duck Debugging" method](https://rubberduckdebugging.com/). It's very simple - try explaining the problem to a rubber duck (or other entity that would need a very rudimentary explanation of what's going on.) After the high-level overview, you could go into as much detail as you want about the problem. This reliably helps you clarify your problem.

Following this, use your "Google-fu" skills to access the innumerable resources on the worldwide web:
> Google-fu is defined as "skill in using search engines (especially Google) to quickly find useful information on the Internet." It is a somewhat tongue-in-cheek reference to kung-fu, which is generally perceived as requiring a high degree of skill to master in the western hemisphere.

To this I'd add [StackOverflow](stackoverflow.com). It's an amazing resource. Don't be afraid to post questions!

Finally, I'm a big fan of [Reddit](reddit.com). There are many useful "subreddits" to follow and ask questions. Example: [learn programming](https://www.reddit.com/r/learnprogramming/)

### 'this' (arrow functions vs function declarations in Javascript)
Remember how specific coding is? Sometimes the simple little word 'function' can throw off your execution context. In the callback functions of event handlers, the use of an arrow function expression (ES6 Javascript) will enforce the 'this' context of the event handling function. Using a function declaration (with the 'function' keyword) will create a new 'this' context for that function. This minor syntax will prevent a handler from firing properly. Recently, I got tripped up because of a callback function *inside* of an event handler that used a function declaration:
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
      this.alterData(event.property);
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

### Complexity
The bigger your application, the more complexity you'll likely have to deal with. Many parts may depend on each other and their interaction can be difficult to manage. Taking a step back from coding and debugger tools is necessary here. I find it helpful to draw diagrams that represent the overall architecture of the application. While doing so, I ask questions to test my assumptions: "Is the component *really* re-rendering throughout the application?" "Do service workers even work in Electron?" "I'm assuming this component can share state with this other component. Is that right?" We tend to resist asking these hard questions. The answers may force us to restructure our application, and we should if it will improve the code overall.

A brief description of some of the complexity bugs I've dealt with recently:
- I was working on a web application that used a service worker thread for recording a user's microphone. My team and I decided to make it a desktop application using Electron. Due to node being single-threaded, we eventually uncovered that our service worker thread wasn't going to work as we originally intended.
- On the same project, we were very baffled that not all parts of our application were responding to changes in our Redux store. We assumed that our listener was available in every page of the application, but we discovered the listener **wasn't** being rendered in all the pages. We could've avoided a lot of fruitless trial and error by challenging our architecture assumption earlier on.
- I was working on an application that mapped over data and included a "Modal" component that would render the data on click. Only the *final* modal rendered properly, the rest were either dim or blacked out. Turns out all the modals were sharing the same state and I needed to wrap each modal into it's own component.

### Bad Design / Copy-Paste Errors: Check your code against S.O.L.I.D, D.R.Y, and other design principles. 

While coding, if you find that you're solving one problem but creating 2 new problems, you're probably going against good design principles. The S.O.L.I.D acronym covers a lot of ground. The "S" stands for "Single Responsibility Principle." If you can help it, a function should only do *one* thing. If you couple multiple actions inside one function, you could create unexpected behavior if something changes elsewhere that interacts with this function. 

The D.R.Y acronym stands for "Don't Repeat Yourself." This isn't just a recommendation - it's essential for creating maintainable code. If you copy and paste once, you're going to have to repeatedly copy and paste with every change. Manual code editing in multiple places is a reciple for disaster. It's better to take the time to ask what's common between both code examples and abstract the functionality out of it. Here's a famous error where the a print to the console is "lying:"
```js
// Initial log is consistent:
const x = 23.5;
const value = 3 * 17 / 53 + x;
console.log(3 * 17 / 53 + x;

// Later, we modify `value` slightly and forget to change the log:
const value = 3 * 17 / (53 + x);
console.log(3 * 17 / 53 + x);// why isn't it changing ?!?!?
```
This is a very dangerous bug - your log is accurate after copy-pasting, but then while you're fixing the code, you modify an expression without modifying the log. You'll notice the parenthesis around `(53 + x)` in `value` but not in the log. I hope you can find a better way to handle this situation.

There are examples for these principles and more in the articles below:
- [5 Principles that will make you a SOLID JavaScript Developer](https://thefullstack.xyz/solid-javascript/)
- [KISS, DRY, YAGNI and More. The 7 Acronyms Every Developer Should Know](https://thefullstack.xyz/dry-yagni-kiss-tdd-soc-bdfu/)

### Famously Horrible Bugs
When working on software that has potentially deadly outcomes, being keenly aware of the limitations of computers is necessary. Small rounding errors in [floating point numbers](https://docs.oracle.com/cd/E19957-01/806-3568/ncg_goldberg.html) happen in *every programming language.* Sadly, there are too many examples of these types of complicated bugs: [List of software bugs - Wikipedia](https://en.wikipedia.org/wiki/List_of_software_bugs)

### Poorly communicated specs
When you've made something that works, but it's not a requested feature, it's not a bug in the software. It's a bug in human communication. By clarifying expectations of your software and slowly building on the minimum features necessary for operation, you can guarantee that you're only working on useful and requested features. Bugs take a lot of time to track down, but unnecessary work is a true time-waster.

### Lack of tests
We all write code that's vulnerable to bugs if we don't continually ask "How can I test this?" I was working on a set of word transforming functions and was proud of the result. I wrote tests after the fact. What happened was *very* enlightening.
```js
// test: what happens with unexpected input?
expect(wordTransform([])).not.toThrowError();//FAILED!!!
```

`wordTransform` expected an array of length greater than 0. I refactored every single method to guarantee to work on any length array and gracefully output `undefined` if the input wasn't expected. I dodged a bullet by writing tests!

### Oblique Strategies
We all get into ruts, following the same patterns of thought over and over again. Something I was turned onto by Collin Miller at Fullstack Academy is called "Oblique Strategies." In a nutshell, they're short text phrases (written by music producer Brian Eno and Peter Schmidt) to get you thinking or moving differently from how you might normally think or move. [Oblique Strategies](http://stoney.sb.org/eno/oblique.html) and [Random Oblique Strategies Online](http://www.joshharrison.net/oblique-strategies/)

Examples:
- "Assemble some of the elements in a group and treat the group"
- "Once the search is in progress, something will be found"
- "Fill every beat with something"

These can help bring your right brain into your problem-solving.

## Parting Thoughts / Further Reading

I hope this simple guide to debugging will be helpful in your future projects. Please [contact me](https://scraggo.github.io/contact/) if you'd like to discuss anything I've written here. May your bugs be few and easy to squash!

**Further Reading**
* [Debugging Strategies](http://localhost:4000/computer%20science/2018/05/08/debugging-strategies.html)
* [250 Debugging Strategies.pdf](https://web.stanford.edu/class/archive/cs/cs106a/cs106a.1134/handouts/250%20Debugging%20Strategies.pdf)
* [Debugging Checklist](http://facweb.cs.depaul.edu/sjost/it212/documents/debug-checklist.htm)
* [flatiron-school/ruby-debugging-checklist: A list of things to do when you hit a bug in your ruby code.](https://github.com/flatiron-school/ruby-debugging-checklist)
* [The "Stupid" Checklist: Just say "No!" to emotional debugging...emotionally! by Mark Witmer on CodePen](https://codepen.io/mwitty/post/the-stupid-list-just-say-no-to-emotional-debugging-emotionally)

- [Read more about Tech Effects here](https://scraggo.github.io/about/)