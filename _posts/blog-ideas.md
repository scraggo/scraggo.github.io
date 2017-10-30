---
layout: post
title:  "Drafts"
date:   2017-08-01 19:45:31 +0530
categories: []
author: "Dave Cohen"
comments: true
---

<style>
pre {
    white-space: pre-wrap;       /* Since CSS 2.1 */
    white-space: -moz-pre-wrap;  /* Mozilla, since 1999 */
    white-space: -pre-wrap;      /* Opera 4-6 */
    white-space: -o-pre-wrap;    /* Opera 7 */
    word-wrap: break-word;       /* Internet Explorer 5.5+ */
}
</style>


- Intro to Aurelia.js and other JavaScript Frameworks
- Blogging with and Customizing Wordpress
- Intro to Fetching Data from RESTful APIs
- How to Generate MIDI Files with JavaScript
- Make Your Own Note-Taking App with Python
- Intro to Making Chrome Extensions
- gulp
- codepen chicago
- regex

## Intro to Aurelia.js and other JavaScript Frameworks
(compile others' thoughts on why frameworks)

What is a JavaScript Framework?

A framework is an imported codebase that adds structure to your code. The ones that are mentioned frequently these days are React, Vue, Angular, Backbone, Ember, Aurelia, and more. Many of them follow the [Model–view–controller / MVC](https://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93controller) paradigm (while others may only do M, V, or C).
- [jquery - What is the difference between a JavaScript framework and a library? - Stack Overflow](https://stackoverflow.com/questions/11576018/what-is-the-difference-between-a-javascript-framework-and-a-library)

Why Use a Framework?

- [Best JavaScript Frameworks, Libraries and Tools to use in 2017 — SitePoint](https://www.sitepoint.com/top-javascript-frameworks-libraries-tools-use/)
- [The Noob’s Guide to Choosing a JavaScript Framework](https://webdesign.tutsplus.com/tutorials/the-noobs-guide-to-choosing-a-javascript-framework--cms-28538)
- [JavaScript Frameworks Are Great – Medium](https://medium.com/@mattburgess/javascript-frameworks-are-great-2df4a3f0b24d)
- [All JavaScript frameworks are terrible – Matt Burgess – Medium](https://medium.com/@mattburgess/all-javascript-frameworks-are-terrible-e68d8865183e)
* [MVC application without using a framework : learnjavascript](https://www.reddit.com/r/learnjavascript/comments/2h9tel/mvc_application_without_using_a_framework/)
* [Javascript Framework - How do they work? : learnjavascript](https://www.reddit.com/r/learnjavascript/comments/1co9va/javascript_framework_how_do_they_work/)
- [Making a Single Page App Without a Framework - Tutorialzine](https://tutorialzine.com/2015/02/single-page-app-without-a-framework)
---
* [ELI5: how do JS frameworks "listen" for state changes? : learnjavascript](https://www.reddit.com/r/learnjavascript/comments/6bud5l/eli5_how_do_js_frameworks_listen_for_state_changes/)
* [Master many of Software Engineering concepts by using popular frontend frameworks : learnjavascript](https://www.reddit.com/r/learnjavascript/comments/61rwxt/master_many_of_software_engineering_concepts_by/)
* [Can you guys explain to me what these js frameworks accomplish? : learnjavascript](https://www.reddit.com/r/learnjavascript/comments/1p697t/can_you_guys_explain_to_me_what_these_js/)
* [Do frameworks make sense for small to medium projects? : learnjavascript](https://www.reddit.com/r/learnjavascript/comments/61q25k/do_frameworks_make_sense_for_small_to_medium/)
* [Use cases for Javascript MVC frameworks : learnjavascript](https://www.reddit.com/r/learnjavascript/comments/2jfohy/use_cases_for_javascript_mvc_frameworks/)
* [You SHOULD Learn Vanilla JavaScript Before JS Frameworks : webdev](https://www.reddit.com/r/webdev/comments/53nta9/you_should_learn_vanilla_javascript_before_js/)
* [Do you still use vanilla JavaScript to create web applications anymore or are framework and libraries the way to go? : webdev](https://www.reddit.com/r/webdev/comments/69w0mk/do_you_still_use_vanilla_javascript_to_create_web/)
* [Why should I use frameworks? : webdev](https://www.reddit.com/r/webdev/comments/2wr131/why_should_i_use_frameworks/)
* [Hello /r/webdev, what are your thoughts regarding not using any front-end framework(angular, ember, libraries like react, vue, etc) to code? just plain vanilla javascript : webdev](https://www.reddit.com/r/webdev/comments/64ma8n/hello_rwebdev_what_are_your_thoughts_regarding/)
* [Learn vanilla JavaScript before using JS frameworks : webdev](https://www.reddit.com/r/webdev/comments/50n4wn/learn_vanilla_javascript_before_using_js/)
* [I am a designer that can code, looking for advise on learning react or any framework for that matter that will help diversify my skills more on the web. : webdev](https://www.reddit.com/r/webdev/comments/6q2o80/i_am_a_designer_that_can_code_looking_for_advise/)
* [What are some simple web apps I can build without a framework before moving on to learning a framework? I am trying to cement my knowledge of vanilla code. : webdev](https://www.reddit.com/r/webdev/comments/51fp5o/what_are_some_simple_web_apps_i_can_build_without/)
* [Is it worth to learn a Javascript Framework? : webdev](https://www.reddit.com/r/webdev/comments/762y5q/is_it_worth_to_learn_a_javascript_framework/)
* [Looking for clarity regarding frontend frameworks. [crosspost from /r/learnprogramming] : webdev](https://www.reddit.com/r/webdev/comments/6po14d/looking_for_clarity_regarding_frontend_frameworks/)

Solving Practical Problems with a Framework

Using the [TodoMVC Project](https://todomvc.com) to compare code of Aurelia and AngularJS to "Vanilla" Javascript (ES6). In a future post, Backbone, React
* [todomvc/examples at gh-pages · tastejs/todomvc](https://github.com/tastejs/todomvc/tree/gh-pages/examples)
* [todomvc/examples/angularjs at gh-pages · tastejs/todomvc](https://github.com/tastejs/todomvc/tree/gh-pages/examples/angularjs)
* [mhoyer/todomvc-aurelia: Straight forward implementation of TodoMVC using Aurelia.](https://github.com/mhoyer/todomvc-aurelia)
* [todomvc/examples/backbone at gh-pages · tastejs/todomvc](https://github.com/tastejs/todomvc/tree/gh-pages/examples/backbone)
* [todomvc/examples/react at gh-pages · tastejs/todomvc](https://github.com/tastejs/todomvc/tree/gh-pages/examples/react)
* [todomvc/examples/vanilla-es6 at gh-pages · tastejs/todomvc](https://github.com/tastejs/todomvc/tree/gh-pages/examples/vanilla-es6)

## Vanilla ES6 - TodoMVC
When first looking at this project, I wasn't sure of what to expect. Instead of the mess of global `getElementById`'s that I'm often guilty of using, the authors *wrote a framework* to gracefully handle updating the DOM and the other application functions. In the `src` folder, we'll first take a brief look at `helpers.js`. It contains a function called `qs` which is short for `querySelector`. `$on` is an `addEventListener` helper. The `$delegate` function uses both `querySelector` and `addEventListener` to update the DOM. "Delegation" is a technique that improves app performance by using event bubbling. [This post](https://stackoverflow.com/questions/33904248/aurelia-delegate-vs-trigger-how-do-you-know-when-to-use-delegate-or-trigger) is an excellent description of how it's used in the Aurelia framework.
- [javascript - Aurelia delegate vs trigger: how do you know when to use delegate or trigger? - Stack Overflow](https://stackoverflow.com/questions/33904248/aurelia-delegate-vs-trigger-how-do-you-know-when-to-use-delegate-or-trigger)

Next, we'll look at `view.js` which uses a `View` class to query the DOM. 

There's a `controller.js` which handles processing of the user's input and the "binding". 

## Aurelia
What is Routing?

Why Imports / Exports?

`<template>` and other Non-HTML Tags

String Templates `${}`

Binding and View Methods

Delegate

Some Examples From My Projects

Aurelia's Docs Are Not Catered to Newbies
- (see tutorials point)



## Gulp Workflows: Babel, Concat, Uglify
asdf

## CodePen Chicago - My First Programming Meetup
I was definitely nervous before going to my first programming meetup. I was concerned that I needed to have something polished to show off or everyone would think I was a fraud. I wound up having a lot of fun! I learned a lot about what technologies are out there. I was inspired by how passionate everyone who presented was about coding.

I've used CodePen for some basic projects and was surprised to learn what it's capable of. One developer made a fun little game using Vue. It seemed incredibly easy to integrate it (in the Settings section of the pen). 

The pens using Firebase impressed me to no end. It seemed very straightforward to get something with a somewhat complex back end up and running.

I consider myself a developer moreso than a designer. The complexity of the graphics [GreenSock on CodePen](https://codepen.io/GreenSock/) were amazing. The programmatic interfaces he designed blew my mind.

- See the pens here: [CodePen Chicago: August 28th 2017 by Brian Montana on CodePen](https://codepen.io/brianmontanaweb/post/codepen-chicago-august-28th-2017)

## Practical Regex - Some Real Life Scenarios

I love regular expressions. They're a mini-programming language that can be a bit confusing when you first encounter it. If I notice some find-replace of text has a general pattern, I always take the time to find the right regex pattern.

Here are some you can practice with:

- Copying text from Slack or Treehouse videos (time stamps and new lines appear)
- URLS: chrome extension, 
- Organizing text, finding new-line characters


<div id="disqus_thread"></div>
<script>

/**
*  RECOMMENDED CONFIGURATION VARIABLES: EDIT AND UNCOMMENT THE SECTION BELOW TO INSERT DYNAMIC VALUES FROM YOUR PLATFORM OR CMS.
*  LEARN WHY DEFINING THESE VARIABLES IS IMPORTANT: https://disqus.com/admin/universalcode/#configuration-variables*/
/*
var disqus_config = function () {
this.page.url = PAGE_URL;  // Replace PAGE_URL with your page's canonical URL variable
this.page.identifier = PAGE_IDENTIFIER; // Replace PAGE_IDENTIFIER with your page's unique identifier variable
};
*/
(function() { // DON'T EDIT BELOW THIS LINE
var d = document, s = d.createElement('script');
s.src = 'https://techeffects.disqus.com/embed.js';
s.setAttribute('data-timestamp', +new Date());
(d.head || d.body).appendChild(s);
})();
</script>
<noscript>Please enable JavaScript to view the <a href="https://disqus.com/?ref_noscript">comments powered by Disqus.</a></noscript>
