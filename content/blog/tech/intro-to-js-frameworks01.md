---
type: post
title: 'Intro to JavaScript Frameworks Part 1: The Vanilla JavaScript Version of TodoMVC'
date: 2017-09-01 19:45:31 +0530
categories: ['tech']
tags: ['javascript']
author: 'Dave Cohen'
comments: true
redirect_from:
  - /tech/intro-to-js-frameworks01/
  - /javascript/2017/09/01/intro-to-js-frameworks01.html
---

The goal of this blog-series is to explain what frameworks do, why they're used, and demonstrate with examples across many different frameworks. The series is aimed at those familiar with JavaScript syntax, accessing the DOM, functions, and classes (object-oriented programming). [Further reading can be found at the bottom of this post.]

## What is a JavaScript Framework?

A framework is an imported codebase that adds structure to your code. The ones that are mentioned frequently these days are React, Vue, Angular, Backbone, Ember, Aurelia, and more. Many of them follow the [Model–view–controller / MVC](https://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93controller) paradigm (while others may only do M, V, or C).

- [jquery - What is the difference between a JavaScript framework and a library? - Stack Overflow](https://stackoverflow.com/questions/11576018/what-is-the-difference-between-a-javascript-framework-and-a-library)

## Why Use a Framework?

There are many reasons to use a framework. There are a number of problems with "state" that occur in any given web-app. We're going to discuss some of the essential concepts that frameworks address in this post.

## Terminology Discussed in this Post

- "Routing"
- "Imports" and "Exports"
- "Binding"
- "Delegating"

## Solving Practical Problems with a Framework

We'll be using the [TodoMVC Project](https://todomvc.com) as a guide to learn some of these concepts. Their introduction:

> Developers these days are spoiled with choice when it comes to selecting an MV* framework for structuring and organizing their JavaScript web apps.
> Backbone, Ember, AngularJS… the list of new and stable solutions continues to grow, but just how do you decide on which to use in a sea of so many options?
> To help solve this problem, we created TodoMVC - a project which offers the same Todo application implemented using MV* concepts in most of the popular JavaScript MV\* frameworks of today.

The links below take you to the implementations we'll be looking at in this series:

- All examples: [todomvc/examples at gh-pages · tastejs/todomvc](https://github.com/tastejs/todomvc/tree/gh-pages/examples)
- AngularJS: [todomvc/examples/angularjs at gh-pages · tastejs/todomvc](https://github.com/tastejs/todomvc/tree/gh-pages/examples/angularjs)
- Aurelia.js: [mhoyer/todomvc-aurelia: Straight forward implementation of TodoMVC using Aurelia.](https://github.com/mhoyer/todomvc-aurelia)
- Backbone: [todomvc/examples/backbone at gh-pages · tastejs/todomvc](https://github.com/tastejs/todomvc/tree/gh-pages/examples/backbone)
- React: [todomvc/examples/react at gh-pages · tastejs/todomvc](https://github.com/tastejs/todomvc/tree/gh-pages/examples/react)
- Vanilla (ES6): [todomvc/examples/vanilla-es6 at gh-pages · tastejs/todomvc](https://github.com/tastejs/todomvc/tree/gh-pages/examples/vanilla-es6)

## Part 1: Vanilla ES6 - TodoMVC

- Use the app: [VanillaJS • TodoMVC](http://todomvc.com/examples/vanillajs/#/)
- **View the project code here: [todomvc/examples/vanilla-es6 at gh-pages · tastejs/todomvc](https://github.com/tastejs/todomvc/tree/gh-pages/examples/vanilla-es6)**

When first looking at the code for this project, I wasn't sure of what to expect. Instead of the mess of global `getElementById`'s that I'm often guilty of using, the authors wrote a Vanilla JS MVC framework to gracefully handle updating the DOM and the other application functions. The app is nicely modular with 'Store', 'Template', 'View', and 'Controller' classes declared in their respective files.

Let's first look at [index.html](https://github.com/tastejs/todomvc/blob/gh-pages/examples/vanilla-es6/index.html). `<link rel="stylesheet" href="node_modules/todomvc-app-css/index.css">` links to the CSS styling of the app. The `<body>` contains a `section` with a class of `main`. It contains the todo inputs, checkboxes, and the first `<footer>` with a class of 'footer'. It contains the filters "All", "Active", and "Completed". Next, there's another `<footer>` with some a class "info" that describes how to use the app and external links. Finally, we see two script tags and another link tag:

```html
<script src="dist/bundle.js"></script>
<script src="node_modules/todomvc-common/base.js"></script>
<link rel="stylesheet" href="node_modules/todomvc-common/base.css" />
```

`<script src="dist/bundle.js"></script>` is the bundle of _all_ the JavaScript source code. The app uses the [Google Closure Compiler](https://developers.google.com/closure/compiler/) to compile ES6 code to ES5, which is then readable by all browsers. The source code is split into multiple files with "Imports" and "Exports" are ES6 functions used throughout to glue it all together. Without compiling ES6 to ES5, most browsers would be unable to render the code.

The final two tags access more functions to render the code into the format you see on the page.

## The 'src' Folder

Let's now look into the heart of the app, **the Source folder**: [todomvc/examples/vanilla-es6/src at gh-pages · tastejs/todomvc](https://github.com/tastejs/todomvc/tree/gh-pages/examples/vanilla-es6/src)

In the `src` folder, we'll first take a brief look at [helpers.js](https://github.com/tastejs/todomvc/blob/gh-pages/examples/vanilla-es6/src/helpers.js). It contains a function called `qs` which is short for `querySelector`. `$on` is an `addEventListener` helper. The `$delegate` function uses both `querySelector` and `addEventListener` to update the DOM. "Delegation" is a technique that improves app performance by using event bubbling. [This post](https://stackoverflow.com/questions/33904248/aurelia-delegate-vs-trigger-how-do-you-know-when-to-use-delegate-or-trigger) is an excellent description of how it's used in the Aurelia framework. (We'll discuss Aurelia in-depth in a future post.)

- [javascript - Aurelia delegate vs trigger: how do you know when to use delegate or trigger? - Stack Overflow](https://stackoverflow.com/questions/33904248/aurelia-delegate-vs-trigger-how-do-you-know-when-to-use-delegate-or-trigger)

Next, we'll look at [view.js](https://github.com/tastejs/todomvc/blob/gh-pages/examples/vanilla-es6/src/view.js). As we know, the "View" of an MVC app is the part of the app that the user interacts with. After some `imports`, the `View` class is instantiated. In the class `constructor`, it takes an instance of `Template` which was imported from `template.js`. We use the `qs` function (the querySelector helper function discussed above) to get the DOM elements, then we `$delegate` to an `editItem` function that's in the class. Let's take a brief look at some of the functions in the class.

- `editItem` puts a todo into 'edit mode' by adding a css class, converting the text to an `<input>`, and adding it to the DOM.
- `showItems` first assigns the array of items (imported from `items.js`) to the template. This is written to the DOM.
- `removeItem` uses `qs` to query the DOM for a todo item with a given id. If it's found, it's removed from the DOM.
- `setItemsLeft` first assigns the `itemsLeft` number param to the template. This is written to the DOM.
  There are more functions, but let's move on.
- `setCompleteAllCheckbox` ensures that `$toggleAll` is set to the desired state by forcing it from its opposite to the desired state with `!!checked`.
- `updateFilterButtons` "Change the appearance of the filter buttons based on the route." We'll look more at routing in `controller.js`.
- `bindAddItem` sets a 'change' event listener on a `$newTodo`. A handler function is assigned to the newly created title.
  You can see that there are many more functions which add or remove css classes, bind handlers to event listeners, and other state-changing utilities.

Let's look at [controller.js](https://github.com/tastejs/todomvc/blob/gh-pages/examples/vanilla-es6/src/controller.js), the "Controller" of the MVC. As you may know, the controller accepts input and converts it to commands for the model or view.

After some `imports`, the `Controller` class is instantiated. In the class `constructor`, it takes an instance of `Store` which was imported from `store.js` and `View` which was imported from `view.js` we previously discussed. We see all of the "bind" functions here and the use of `.bind` to to set the `this` value on the associated methods. [Read more about bind methods here.](http://javascriptissexy.com/javascript-apply-call-and-bind-methods-are-essential-for-javascript-professionals/). Next, we see `this._activeRoute = '';` and `this._lastActiveRoute = null;`. These are "routes." Routing is important for any single-page application (SPA). It allows you to navigate to different "pages" without reloading the page. The three routing states in TodoMVC are "All", "Active", and "Completed." Now that we have some of the basics, let's take a brief look at some of the functions in the class.

- `setView` puts the selected page from the filtered section into view. The route is first changed, then the filter is updated. We'll look at `_filter` below.
- `addItem` inserts the title of the new item into local storage, then updates the view.
- `editItemSave` updates an item after its edited.
- `removeItem` takes the unique item id, updates the filter, then removes the item from the view.
- `_filter` begins by setting the active route to a `const` variable. It looks at the active route compared to the `_lastActiveRoute` and updates the item object. It binds it to the view. The view is then updated with four functions from the instantiated view. Finally, the `_lastActiveRoute` is set to the `_activeRoute.`

## What We Learned

From looking at the source code, we can see that creating a simple todo list SPA requires some heavy-lifting to be done correctly. The Vanilla (ES6) version of TodoMVC contains an `index.html` that imports the main codebase and contains the DOM components. The 'src' folder contains all the non-compiled code that is logically glued together with imports and exports. The code is modularized into `view`, `controller`, and helper functions. We saw how "routing" allows us to have multiple page states within one page. We saw how "delegation" and "binding" allow us to define which functions will be acted upon which elements.

## Further Reading

Resources on accessing the DOM:

- [The Basics of JavaScript DOM Manipulation - Call Me Nick](http://callmenick.com/post/basics-javascript-dom-manipulation)
- [DOM Scripting Tutorial](http://xahlee.info/js/scripting_web_index.html)
- [The Document Object Model :: Eloquent JavaScript](https://eloquentjavascript.net/13_dom.html)

Resources that attempt to answer "Why Use a Framework?"

- [Best JavaScript Frameworks, Libraries and Tools to use in 2017 — SitePoint](https://www.sitepoint.com/top-javascript-frameworks-libraries-tools-use/)
- [The Noob’s Guide to Choosing a JavaScript Framework](https://webdesign.tutsplus.com/tutorials/the-noobs-guide-to-choosing-a-javascript-framework--cms-28538)
- [JavaScript Frameworks Are Great – Medium](https://medium.com/@mattburgess/javascript-frameworks-are-great-2df4a3f0b24d)
- [All JavaScript frameworks are terrible – Matt Burgess – Medium](https://medium.com/@mattburgess/all-javascript-frameworks-are-terrible-e68d8865183e)

* [MVC application without using a framework : learnjavascript](https://www.reddit.com/r/learnjavascript/comments/2h9tel/mvc_application_without_using_a_framework/)
* [Javascript Framework - How do they work? : learnjavascript](https://www.reddit.com/r/learnjavascript/comments/1co9va/javascript_framework_how_do_they_work/)

- [Making a Single Page App Without a Framework - Tutorialzine](https://tutorialzine.com/2015/02/single-page-app-without-a-framework)

<div id="disqus_thread"></div>
<script>

/\*\*

- RECOMMENDED CONFIGURATION VARIABLES: EDIT AND UNCOMMENT THE SECTION BELOW TO INSERT DYNAMIC VALUES FROM YOUR PLATFORM OR CMS.
- LEARN WHY DEFINING THESE VARIABLES IS IMPORTANT: https://disqus.com/admin/universalcode/#configuration-variables*/
  /_
  var disqus_config = function () {
  this.page.url = PAGE_URL; // Replace PAGE_URL with your page's canonical URL variable
  this.page.identifier = PAGE_IDENTIFIER; // Replace PAGE_IDENTIFIER with your page's unique identifier variable
  };
  _/
  (function() { // DON'T EDIT BELOW THIS LINE
  var d = document, s = d.createElement('script');
  s.src = 'https://techeffects.disqus.com/embed.js';
  s.setAttribute('data-timestamp', +new Date());
  (d.head || d.body).appendChild(s);
  })();
  </script>
  <noscript>Please enable JavaScript to view the <a href="https://disqus.com/?ref_noscript">comments powered by Disqus.</a></noscript>
