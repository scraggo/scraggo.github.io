---
type: post
title: 'Design Patterns'
date: 2021-03-23
categories: ['tech']
tags: ['design patterns']
author: 'Dave Cohen'
---

## Introduction

As developers, we’re constantly learning - and there’s a lot to learn in general because the tech industry is broad and fast-paced. We want to have all the main bases covered so that we can be ready for any situation. We often hear about **design patterns** and how they can enable us to write well-architected software using object-oriented programming. If you’re like me, you might file that away as a set of concepts to learn later. I filed them into the "important, but not urgent" (quadrant two of [Eisenhower’s matrix](https://www.developgoodhabits.com/eisenhower-matrix/)) category. Of course, there are many topics to learn that are required for us to do our job. So design patterns might not make it to the top of your priority list - where items like _testing_, _frameworks_, _CI/CD_, or a dozen other things live.

I was always intrigued by design patterns, but as with learning anything new, I was in the dark about a lot of things. First, I didn’t know _why_ I should learn them. I didn’t know _what they are_. "Are they best practices, SOLID principles, architecture guides, or what?" I would ask. I don’t know _exactly how they can help me_ (besides simply being familiar). Naturally, I didn’t have a _clear learning path_ - I didn’t know _how_ I should learn them or _if it’s the right time_ for me to learn them. What are the prerequisites? What material should I use and how do I avoid being scattered? How do I put them into practice?

Now that I’ve spent over a year learning design patterns, I wanted to share my journey and hopefully answer all of the above questions. I went from feeling scattered amongst resources I haphazardly encountered like blog posts and videos, to seeking out some books, and encountering a few patterns at work. When my mentor made a few fantastic recommendations, I was off to the races:

- the writings of Alexander Shvets on [refactoring.guru](https://refactoring.guru). The author has created an _amazing_ resource that I quote heavily throughout this post. (He also has [books available](https://refactoring.guru/store).)
- ways to put design patterns into practice

(Also, shout-out to an awesome video series - [Christoper Okhravi on design patterns](https://www.youtube.com/watch?v=v9ejT8FO-7I) - which really helped me get my initial bearings.)

The goal of this article is to provide a guide that I would’ve loved when I first started my journey. It provides clarification on:

- exactly what design patterns are and the types of problems they can solve
- what design patterns aren’t and the types of problems that they don’t solve

After your mental schemas are primed, I provide much-needed motivation to take the first steps.

- how learning design patterns help you solve software problems _in general_
- how learning design patterns will build _intuition_ so you can easily spot these problems from a high-level

Finally, I want to make your learning as efficient as possible. This article lists the prerequisites for learning design patterns, how to put them in practice, and provide advanced ideas to solidify your knowledge.

Let’s begin by making the mental space for design patterns by discussing what they are.

## What Design Patterns are

You may have heard of the book _Design Patterns: Elements of Reusable Object-Oriented Software_ a.k.a. the "Gang of Four" ("GoF") book (where the four authors are the "Gang of Four.") Using "pattern language" adapted from a [book about buildings](https://refactoring.guru/pattern-language-book), the gang came up with 23 design patterns. (Read more [here](https://refactoring.guru/design-patterns/history) and [here](https://www.journaldev.com/31902/gangs-of-four-gof-design-patterns).)

As mentioned, I’ll be heavily quoting the writings of Alexander Shvets on [refactoring.guru](https://refactoring.guru) throughout this post. Here’s an [introductory quote](https://refactoring.guru/design-patterns/what-is-pattern) from the site:

> "Design patterns are typical **(2)** **solutions to common problems** in **(1) software (object-oriented) design**. Each pattern is like a **(3) blueprint that you can customize** to solve a particular design problem in your code."

Let’s dig into three key parts (in **bold**) of this statement.

### (1) "software (object-oriented) design"

To say design patterns encompass all of "software design" is too broad, in my opinion. I prefer to think of them as "object-oriented (OOP) design patterns" because they are most often taught and implemented this way. (Caveat: it’s not imperative to use classes (etc) to implement design patterns.) For the sake of argument, let’s say "software" can be broken into five levels: 1. ground-level byte-code. 2. language (idiom) 3. feature (business logic). 4. architecture. 5. deployment. The levels best suited to applying design patterns are the language (idiom) level, the feature level, and architecture levels.

The first level (byte-code) isn’t too relevant. If we’re talking about the design of the tools that create byte-code from source code, then we’re discussing the third level of software. (Tools I’m familiar with include _gulp_ and _webpack_ - "plugin" systems which may use the Template Method, Strategy, or other patterns to implement them.)

The applicability at the second level (language, idiom) is limited since language idioms depend on the best practices of that language. Some patterns that apply at this level are:

- [https://refactoring.guru/design-patterns/memento](https://refactoring.guru/design-patterns/memento) - Here we’re guided towards various ways of implementing the pattern using nested classes, an intermediate interface, and an even stricter encapsulation. None of these implementations changes the fundamental nature of the pattern, but this guidance is useful.
- [https://refactoring.guru/design-patterns/prototype](https://refactoring.guru/design-patterns/prototype) - This pattern may help us understand prototype-based languages ([including JavaScript](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object_prototypes).)
- [https://refactoring.guru/design-patterns/iterator](https://refactoring.guru/design-patterns/iterator) - This pattern may help us understand iterators provided by a language ([example in JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterator_protocol).)

To get more familiar with language idioms for design patterns, be sure to check out [https://refactoring.guru/design-patterns/examples](https://refactoring.guru/design-patterns/examples) which has illustrations of all the patterns in many languages!

The applicability at the third level (feature) is the "sweet spot." They shine at encapsulating business logic, memory management, server calls, and much more. For example, if I know that I need a way to get multiple objects that solve variations of a problem, I can use the [Factory Method pattern](https://refactoring.guru/design-patterns/factory-method). If I want to be able to optionally wrap objects with extra functionality as needed, I can use the [Decorator pattern](https://refactoring.guru/design-patterns/decorator). If I need to set up a chain of classes where one optionally passes the result to the next, the [Chain of Responsibility pattern](https://refactoring.guru/design-patterns/chain-of-responsibility) could help. The point being, most (if not all) of the patterns can aid in feature implementation.

Design patterns are also very applicable to the fourth (architectural) level of software. We may use the [Adapter pattern](https://refactoring.guru/design-patterns/adapter) to morph data into a format we can use between a Model layer and a Controller layer. We could implement the [Proxy pattern](https://refactoring.guru/design-patterns/proxy) to authenticate writes to a database.

Finally, the fifth (deployment) level can benefit from design patterns if there are code capabilities for deployment architectures. In this case, see level four above.

(I would like to mention more advanced patterns here including Microsoft cloud patterns and 12factor. These resources, linked at the end of this article, guide us to implementing best practices like isolating pieces of a system, making certain pieces stateless, etc.)

### (2) "solutions to common problems"

Each of the 23 patterns attempt to solve one or more issues that frequently arise in codebases. Here are some examples described with their respective patterns:

- Cognitive complexity. Object-oriented programming is commonly criticized for making it too easy to overuse [inheritance where composition would be superior](https://en.wikipedia.org/wiki/Composition_over_inheritance). The primary danger of inheritance is creating too many subclasses. These subclasses contain variations based on a small property that changes - something that should’ve been isolated and passed into a single class. Addressed by the [Bridge](https://refactoring.guru/design-patterns/bridge), [Command](https://refactoring.guru/design-patterns/command), [Strategy](https://refactoring.guru/design-patterns/strategy), [State](https://refactoring.guru/design-patterns/state), and other patterns. _(The "too-many-combinations" problem results from Cartesian products. [Christopher Okhravi details it in his Bridge pattern video](https://youtu.be/F1YQ7YRjttI) and other videos.)_
- Needing to control access to an object. For instance, you’re using a third-party library and you only want to use a few methods of its API (and others would be detrimental for your application.) The [Facade pattern](https://refactoring.guru/design-patterns/facade) would work well in this case. Other patterns that address access issues include [Singleton](https://refactoring.guru/design-patterns/singleton), and [Proxy](https://refactoring.guru/design-patterns/proxy).
- Needing to build an object in pieces. The [Builder pattern](https://refactoring.guru/design-patterns/builder) addresses this beautifully by giving us methods that we can opt-into to create an object. The [Template Method pattern](https://refactoring.guru/design-patterns/template-method) is similar but allows us to override or omit certain stages of an algorithm.
- Conserving RAM. The [Flyweight pattern](https://refactoring.guru/design-patterns/flyweight) allows us to cache shared parts of objects and let other parts be unique. (The "access-control" patterns mentioned above also address caching.)
- Making an undo / redo stack available. Addressed by the [Memento](https://refactoring.guru/design-patterns/memento) and [Command](https://refactoring.guru/design-patterns/command) patterns.

A huge benefit to having a catalog of common problems is they come with descriptive language to illustrate the problem. One of my favorite examples is the [Visitor pattern](https://refactoring.guru/design-patterns/visitor). The problem is we have a network of nodes and we need to traverse and process them. Instead of hardcoding in algorithms for a node class, we "visit" the node with a special class (Visitor) that has access to a node’s methods and data as needed. The node that gets visited is commonly called "element" (which is generic) but you can think of it as a "visitee" to complete the essential pair of the pattern.

### (3) "blueprints you can customize"

Rather than thinking of design patterns as off-the-shelf solutions, think of them as guidance on splitting problems into smaller pieces and having these pieces interact. You can customize a pattern by adding functionality that isn’t included in its description. For example, you might add a utility method for an Iterator so that you can quickly retrieve items from a given list. Another way of customizing a pattern is by omitting pieces you don’t need. An example of this is the [Builder pattern](https://refactoring.guru/design-patterns/builder) which has a "director" class you can opt into using.

## What Design Patterns aren’t (and additional considerations)

### They aren’t an automatic enforcement of best practices

Design patterns certainly aren’t a silver bullet. Your usage of them doesn’t _necessarily_ make your code better, more testable, more maintainable, or easier to comprehend. These concerns are "foundational" to the software you write and design patterns may or may not address them.

We often hear of [S.O.L.I.D. principles](https://en.wikipedia.org/wiki/SOLID) - best practices that increase the quality of our software. For example, the "S" of SOLID is the Single-responsibility-principle - prefer functions with a single responsibility. Functional programming principles can help us achieve this as well. For example, always creating functions that don’t mutate their input and have a deterministic output based on its input. Since design patterns are "blueprints," this language-specific level stuff will be up to you during implementation. (Their proper use certainly will include best practices.)

### They can’t solve every possible problem

> "Design patterns build on the foundations laid by solid analysis of software development. **(1) You will not find a pattern that solves every problem you encounter**. Some problems are simply intractable and unmanageable. Other problems may have a solution, but there are no widely known patterns to solve the challenge at hand. Indeed, this may be an opportunity for you to make a mental note by documenting a pattern you invent, discover or document as you synthesize existing patterns to create new patterns." [https://www.gofpatterns.com/design-patterns/module7/limitations-of-design-patterns.php](https://www.gofpatterns.com/design-patterns/module7/limitations-of-design-patterns.php)

Let’s say you’re "in the weeds" of developing a feature. You may have your classes neatly arranged, but then find yourself needing to create extra layers and considerations to successfully use the patterns or correctly implement business logic. Many of the patterns involve a "client" object which is an especially loose description of how the core objects interact. Writing client implementations is always on the developer and you may find yourself without a guide on how to architect your specific feature.

### Complexity

In many cases, the tradeoff of implementing a design pattern and keeping the code straightforward might not be worth it. A caveat with many patterns is "The code may become more complicated than it should be, since a lot of new interfaces and classes are introduced along with the pattern." ([https://refactoring.guru/design-patterns/abstract-factory](https://refactoring.guru/design-patterns/abstract-factory), [https://refactoring.guru/design-patterns/flyweight](https://refactoring.guru/design-patterns/flyweight), and more)

If you’ve decided to opt in to the complexity tradeoff, you may find that the complexity breeds more complexity. For example, you may need to add additional layers of logic to allow new objects to talk to each other. There’s now more code and more that can go wrong. (See flocking rules [https://jamiewright.dev/2019/02/04/refactoring-flocking-rules/](https://jamiewright.dev/2019/02/04/refactoring-flocking-rules/))

There’s a middle-ground approach that we should consider before changing existing code to utilize a design pattern. [Refactoring.guru features a refactoring section](https://refactoring.guru/refactoring) that identifies problems on a more granular level. While some of the solutions include design patterns, many of them don’t need to go that far.

### Incorrect Usage

Finally, as mentioned in [https://refactoring.guru/design-patterns/criticism](https://refactoring.guru/design-patterns/criticism), it’s easy enough to use patterns badly or incorrectly. Doing so may lead to inefficient or difficult to understand code. You might as well start over without a pattern in these cases until it’s clear how to correctly implement one. (Example - a non-global Singleton may increase performance but deceive developers who later work on the code)

## Motivation for learning Design Patterns

There are a few extrinsically motivating reasons to learn design patterns. We’ll be able successfully answer interview questions about them. We can participate in or lead team discussions involving them. Additionally, knowledge of them strengthens our object-oriented programming (OOP) and general programming skills.

Personally, these reasons didn’t initially motivate me to put in effort beyond reading a few articles here and there. I want to be _excited_ about what I learn. Being intrinsically motivated allows anything you learn to "stick" better. ([More about extrinsic and intrinsic motivation](https://www.psychologytoday.com/us/blog/creative-leadership/202004/extrinsic-vs-intrinsic-motivation-work).) Let’s start with this useful overview refactoring.guru:

> "Design patterns are a toolkit of tried and tested solutions to common problems in software design. Even if you never encounter these problems, knowing patterns is still useful because it **(1) teaches you how to solve all sorts of problems** using principles of object-oriented design. Design patterns **(2) define a common language** that you and your teammates can use to communicate more efficiently. You can say, "Oh, just use a Singleton for that," and everyone will understand the idea behind your suggestion. No need to explain what a singleton is if you know the pattern and its name." [https://refactoring.guru/design-patterns/why-learn-patterns](https://refactoring.guru/design-patterns/why-learn-patterns)

Let’s dig into a few key parts (in **bold**) of this statement.

### (1) "teaches you how to solve all sorts of problems"

Being able to think in terms of interactions between objects is incredibly beneficial for solving problems by way of creating well-abstracted code.

As you become more familiar with design patterns, you can anticipate common problems that arise. We saw a slew of problem examples in the "solutions to common problems" section. Knowingly or not, you’ve probably used the [Strategy](https://refactoring.guru/design-patterns/strategy), [Facade](https://refactoring.guru/design-patterns/facade), [Adapter](https://refactoring.guru/design-patterns/adapter), or other patterns before.

There are very popular external libraries that utilize design patterns. Understanding design patterns will help you more easily understand how they work. Examples:

- Subscription methods in Redux [use a pub-sub Observer system](https://stackoverflow.com/questions/39977540/can-redux-be-seen-as-a-pub-sub-or-observer-pattern)
- [React lifecycle methods](https://reactjs.org/docs/state-and-lifecycle.html#adding-lifecycle-methods-to-a-class) and Database hooks (see the [Sequelize ORM](https://sequelize.org/master/manual/hooks.html) for example) utilize the Template Method pattern
- [https://github.com/davidkpiano/xstate](https://github.com/davidkpiano/xstate) is a state machine - State pattern

We mentioned best practices before, and I believe when implemented correctly, design patterns encourage creation of clean, well-architected code. Many of the design patterns were born out of motivation to implement S.O.L.I.D. principles.

- [The Visitor pattern](https://refactoring.guru/design-patterns/visitor) encourages the _Open/Closed Principle_ and the _Single Responsibility Principle_
- [The Factory Method pattern](https://refactoring.guru/design-patterns/factory-method) encourages the _Open/Closed Principle \_and the \_Single Responsibility Principle_
- [The Composite pattern](https://refactoring.guru/design-patterns/composite) encourages the _Open/Closed Principle_
- See the _pros/cons_ sections of the above links and many of the other patterns.

### (2) "define a common language"

Enabling and improving communication for yourself and between developers, in my opinion, is very motivating. In the earlier "solutions to common problems" section, we brought up a few common problems and names of patterns that address them. Having these as a shared vocabulary not only helps you convey your thoughts to others, it clarifies your internal voice while you’re working on your own.

The terminology used throughout the study of the topic usually begins with an analogy to something you can understand outside of software. Once the analogy becomes concretized with code examples, your abilities to communicate on the higher design level will increase. Learning through analogies will be a general mental benefit. You’ll understand these concepts more deeply because you’ll be able to relate them to concepts outside of programming. (More about taking advantage of these analogies in the "how to learn" section.)

### Building intuition and creativity

Design patterns can be thought of as "distilled experience" of past engineers. They provide a catalog of problems that have come up so many times before. We’re in a privileged position to avoid reinventing the wheel and, best of all, to build _intuition_ for solving these problems.

We immensely benefit from learning this repertoire of pre-built solutions. Studying with the goal of internalizing them is an important step for building intuition. Once internalized, you may have a conversation with your team while planning the implementation of a feature. You could recall a pattern and have a "light bulb" moment. You’re able to see the pattern in your mind, remember its name, and easily speak to its associated terminology. Now you can confidently discuss how it would behoove us to "use the Strategy pattern to abstract the algorithm out of the function. We can see that these lines of the function have the algorithm hard-coded in. This makes it impossible to reuse our looping strategy to gather the processed elements. The Strategy pattern solves this."

Having this intuition can unlock creativity. Design patterns provide a well-defined structure that we can creatively work with. To break new ground, we might opt to go "backwards" by seeking problems with a solution in mind, reversing the usual problem-first routine. This allows us to solve problems in a new way and reinforce our problem-solving schemas.

Other creative approaches are also opened up. Being able to recognize where you can vary patterns allows you to see them (and other constructs) more fluidly. These variations may even lead to coming up with a new type of pattern altogether!

## How to learn Design Patterns

This section is meant to get you started with learning design patterns. Included are suggested learning paths and resources that have helped me.

### Prerequisites

Here are a few suggestions before cracking open a fat book on design patterns:

1. Make at least one program of medium or higher complexity on your own. Without this, you may lack context that comes from encountering at least one problem that design patterns solve.
2. Get familiar with object-oriented programming, ie - classes, properties, methods, instantiation, inheritance, etc. (If you’re a JavaScript developer, it would be advantageous to be familiar with TypeScript and use that to learn the patterns.)
   - [https://github.com/scraggo/design-patterns-refactoring-guru/](https://github.com/scraggo/design-patterns-refactoring-guru/)
   - [https://www.typescriptlang.org/docs/handbook/release-notes/overview.html](https://www.typescriptlang.org/docs/handbook/release-notes/overview.html)
3. Learn how to create UML (Unified Modeling Language) class diagrams. They’re popular and effective for visually summarizing higher level concepts - especially design patterns.
   - UML Class Diagram - Tutorial And Example [https://www.tutorialandexample.com/class-diagram/](https://www.tutorialandexample.com/class-diagram/)
   - UML Class Diagram Tutorial [https://www.visual-paradigm.com/guide/uml-unified-modeling-language/uml-class-diagram-tutorial/](https://www.visual-paradigm.com/guide/uml-unified-modeling-language/uml-class-diagram-tutorial/)
   - UML Class Diagram Tutorial with Examples [https://www.guru99.com/uml-class-diagram.html](https://www.guru99.com/uml-class-diagram.html)

### Design Patterns 101: Getting Started

#### Classifying design patterns

Let’s begin by understanding [how to classify the design patterns](https://refactoring.guru/design-patterns/classification):

> "Design patterns differ by their complexity, level of detail and scale of applicability. In addition, they can be categorized by their intent and divided into three groups. **Creational** patterns provide object creation mechanisms that increase flexibility and reuse of existing code. **Structural** patterns explain how to assemble objects and classes into larger structures, while keeping the structures flexible and efficient. **Behavioral** patterns take care of effective communication and the assignment of responsibilities between objects."

Classifying the patterns will help give you a lay-of-the-land. You’ll be more oriented while learning them. A good first pattern for classification is the [Singleton pattern](https://refactoring.guru/design-patterns/singleton). It’s a **Creational** pattern of low complexity. (refactoring.guru also gives it a medium rating in terms of popularity.)

The word "singleton" is helpful because the pattern acknowledges the use of the word in English: "_a single thing of the kind under consideration_." It makes it easy to remember its intent, "_ensuring that a class has only one instance, while providing a global access point to this instance_."

Learning through analogies can be a huge mental benefit. We can understand the corresponding concepts more deeply because we can relate to them outside of programming. For example, the [Decorator pattern](https://refactoring.guru/design-patterns/decorator) (a Structural pattern) provides powerful imagery of Russian dolls which represent "layering." Once you’ve got the analogy and you’ve studied the methods with the terminology in mind, it’ll be difficult to forget A) the pattern category and B) how it works.

#### "Affordances" (summarizing design patterns)

We can classify the patterns even further. Each pattern addresses

- a "problem" unrelated to any pattern
- an "intent" that provides a general overview of how it solves this problem
- pattern-specific terminology and analogies to help you understand the problem holistically
- the structure of the design pattern, along with pattern-specific terminology and analogies
- other application-improving advantages

Every design pattern is a tool-kit that affords the developer certain advantages. I think of these advantages as "affordances" (as discussed in the book [The Design of Everyday Things](https://en.wikipedia.org/wiki/The_Design_of_Everyday_Things)). It was very helpful for my own study to summarize all of the above for each design pattern. Here are the points, more or less, that I use:

- Name / Category (Behavioral/Creational/Structural) / Summary
- Common Problem Scenario
- Terminology - As discussed, patterns have terminology, a domain that arises from analogy. It’s helpful to lay it out here. I use "A", "B", "C" (etc) to lay out each object that’s involved in the pattern. I find it helpful to use method names that include "get", "set", "do" (transform, act), "read", "write" to provide consistency.
- Addressing the problem of change - The Open/Closed principle states that change should be an extension, not a modification. (example: we don’t want to bloat A w/ business logic, B can change and be changed out easily)
  - Change Dimensions - each kind of change represents a dimensional axis. The complexity of a pattern increases with the number of dimensions.
- Scalability - A can be (blissfully) "ignorant" of how many B’s are added if API is consistent. We can add as many B’s (but should be cognizant of performance)
- Performance - ex: lazy loading
- Communication
  - Couplings - What knowledge must a class have of workings of another class? Many times, we must update classes that correspond with a dimensional change
  - Encapsulation and decoupling - allowing you to specify complex inputs with minimal system changes / flocking
  - Access Control - boundaries make our programs safer, easier to reason about. SRP - the fewer jobs each component has, the better.
- Similarities to other patterns

As an example, here are the affordances of the [Command pattern](https://refactoring.guru/design-patterns/command):

- "Command is a behavioral design pattern that turns a request into a stand-alone object that contains all information about the request. This transformation lets you parameterize methods with different requests, delay or queue the execution of a request, and support undoable operations."
- Common Problem Scenario - UI elements being coupled to what they do can lead to explosion of subclasses (the Cartesian problem.) If multiple user actions can trigger in the same request, we risk code duplication.
- Terminology - A - Command - a request and relevant info. A.execute() - make the request, A.undo(). B - Invoker - that which sets and executes the command. B.setCommand(), B.executeCommand(). C - Receiver - that which responds to the executed command.
  - Transformation - if A.undo() is desired, a careful implementation of a command stack and ability to restore backup states should be implemented.
- Change Dimensions - Add as many As, Bs, Cs as needed. B can dynamically set A, only one at a time.
- Scalability - this is scalable as long as simultaneous requests don’t burden C.
- Couplings - A must follow a consistent API
- Communication
  - Access Control - A normally can access B’s methods.
  - Encapsulation - B can be oblivious to details of commands
- Performance - see scalability
- Similarities - Chain of Responsibility, Command, Mediator and Observer address various ways of connecting senders and receivers of requests. Handlers in [Chain of Responsibility](https://refactoring.guru/design-patterns/chain-of-responsibility) can be implemented as [Commands](https://refactoring.guru/design-patterns/command). You can use Command and Memento together when implementing "undo". Strategy looks similar but, Strategy usually describes different ways of doing the same thing, letting you swap these algorithms within a single context class. Prototype can help when you need to save copies of Commands into history. You can treat Visitor as a powerful version of the Command pattern.

### Design Patterns 201: In practice

#### Write code and test it

My own study of design patterns initially felt haphazard. Read a book here, watch a video there, come across a blog post in an article feed, etc. I came across the Iterator pattern in one of the codebases I was working on, but that hands-on experience didn’t take me too far. I wanted to learn the topic well, but knew that just consuming information wasn’t enough - I had to put design patterns into practice.

Initially, I’d choose a design pattern. Then watch videos, read refactoring.guru articles, create the UML diagram, and consume other resources until I felt like I could summarize the design pattern. From there, I’d _hopefully_ be able to use it in the future.

Then I noticed that [https://refactoring.guru/design-patterns/examples](https://refactoring.guru/design-patterns/examples) has implementations of all the design patterns in Java, Ruby, Go, Swift, Python, TypeScript, and more!

I saw this as a fantastic opportunity to create a codebase that would run all the patterns in TypeScript. I’d have hands-on experience with TypeScript by having made sure the code compiled and having written assertions of expected output.

The result of that effort is here: [https://github.com/scraggo/design-patterns-refactoring-guru](https://github.com/scraggo/design-patterns-refactoring-guru)

I recommend doing something similar yourself.

- Step 1: running the `client` functions and studying the output. Ask yourself if the output makes sense.
- Step 2: adding tests for that pattern. Instead of relying on console.log, we’d then have an automated test suite that gives us confidence that all our class methods work as intended. Here’s an example for the Builder pattern:

```js
describe('without Director', function () {
  it('ConcreteBuilder1 calls reset() after getProduct()', function () {
    builder.producePartA();
    const product = builder.getProduct();

    expect(product).to.deep.equal({
      parts: ['PartA1'],
    });

    expect(builder.getProduct()).to.deep.equal({
      parts: [],
    });
  });
```

We have an explicit test for exactly what the `it` block describes: "ConcreteBuilder1 calls reset() after getProduct()'". We’re able to get a "product" and assert that it’s correct. After we get it, we call reset() which clears out the product parts and we assert that it’s an empty array.

[https://github.com/scraggo/design-patterns-refactoring-guru](https://github.com/scraggo/design-patterns-refactoring-guru) is open source if you’d like to contribute tests for a yet-to-be-tested pattern.

#### Study design patterns in the wild

As mentioned earlier, there are many libraries that you may interact with that use design patterns. As you learn the internals of JavaScript systems like React, Redux, Gulp, Webpack, database systems, etc, be on the lookout for mentions of architecture. Find the code (if it’s open source) and see how the author(s) implemented the code.

As for some simpler examples built for tutorial purposes:

Python:

- [https://miguendes.me/design-patterns-that-make-sense-in-python-simple-factory](https://miguendes.me/design-patterns-that-make-sense-in-python-simple-factory)
- [https://github.com/faif/python-patterns](https://github.com/faif/python-patterns)

### Design Patterns 301: Advanced

#### "Solution-first" thinking; in search of a problem

Now that we’ve built up theoretical and practical understanding of the patterns, we can set ourselves up to solve future problems by giving ourselves some creative exercises.

As stated before: "To break new ground, we might opt to go "backwards" by seeking problems with a solution in mind, reversing the usual problem-first routine. This allows us to solve problems in a new way and reinforce our problem-solving schemas."

This works by forcing us to conjure a bunch of problems - getting our creative juices flowing. Does an application you use, say VictorOps, remind you of the Observer pattern? Great - try to create your own high-level version of that service using the pattern to solve the problem.

Once you’ve got the hang of one pattern, try _combining_ two design patterns. You can solve new problems this way. Systematically combining patterns and simultaneously thinking of applications for them will be immensely beneficial.

This was a suggestion from my mentor which we ran with. I added a number of combinations to the `combinations/` directory in [https://github.com/scraggo/design-patterns-refactoring-guru](https://github.com/scraggo/design-patterns-refactoring-guru):

- Composite and Observer - A notification system that selectively notified the subscriber based on the event
- Factory and Strategy - A generic product data was retrieved by a strategy and coupled accordingly in a factory
- Iterator and Visitor - Allows JSON and HTML export of a word collection stored in an arbitrary collection type
- Abstract Factory and Bridge - A digital audio workstation that initializes a track with an instrument collection
- Flyweight and Memento - A slides app that caches the images and has an undo/redo history

## Conclusion

Of course, this isn’t necessarily the end of the topic. We can go well beyond the Gang’s 23 design patterns.

[Cloud Design Patterns | Microsoft](https://docs.microsoft.com/en-us/azure/architecture/patterns/) - "These design patterns are useful for building reliable, scalable, secure applications in the cloud. Each pattern describes the problem that the pattern addresses, considerations for applying the pattern, and an example based on Microsoft Azure. Most of the patterns include code samples or snippets that show how to implement the pattern on Azure. However, most of the patterns are relevant to any distributed system, whether hosted on Azure or on other cloud platforms."

[The 12 Factor App Methodology](https://12factor.net/) - "In the modern era, software is commonly delivered as a service: called _web apps_, or _software-as-a-service_. The twelve-factor app is a methodology for building software-as-a-service apps"...

[https://techbeacon.com/app-dev-testing/top-5-software-architecture-patterns-how-make-right-choice](https://techbeacon.com/app-dev-testing/top-5-software-architecture-patterns-how-make-right-choice)

[https://en.wikipedia.org/wiki/Applications_architecture#Patterns](https://en.wikipedia.org/wiki/Applications_architecture#Patterns)

[https://martinfowler.com/bliki/DomainDrivenDesign.html](https://martinfowler.com/bliki/DomainDrivenDesign.html)

### Resources

Finally, here are a number of resources that I’ve found helpful while learning:

- [refactoring.guru](https://refactoring.guru)
  - [Dive into Design Patterns by Alexander Shvets](https://refactoring.guru/design-patterns/book)
- [Design Patterns: Elements of Reusable Object-Oriented Software](https://www.amazon.com/gp/product/0201633612/)
- [Christoper Okhravi video playlist](https://www.youtube.com/watch?v=v9ejT8FO-7I)
- [https://codesource.io/javascript-design-patterns/](https://codesource.io/javascript-design-patterns/)
- [https://blog.logrocket.com/design-patterns-in-node-js/](https://blog.logrocket.com/design-patterns-in-node-js/)
- [https://khalilstemmler.com/articles/solid-principles/solid-typescript/](https://khalilstemmler.com/articles/solid-principles/solid-typescript/)
- [https://www.google.com/amp/s/stackify.com/interface-segregation-principle/amp/](https://www.google.com/amp/s/stackify.com/interface-segregation-principle/amp/)
- [https://levelup.gitconnected.com/design-patterns-in-modern-javascript-development-ec84d8be06ca](https://levelup.gitconnected.com/design-patterns-in-modern-javascript-development-ec84d8be06ca)
- [https://medium.com/@andy.sek94/s-o-l-i-d-principles-for-software-development-611b5f7170de](https://medium.com/@andy.sek94/s-o-l-i-d-principles-for-software-development-611b5f7170de)
- [https://miguendes.me/design-patterns-that-make-sense-in-python-simple-factory](https://miguendes.me/design-patterns-that-make-sense-in-python-simple-factory)
- [https://github.com/faif/python-patterns](https://github.com/faif/python-patterns)
- [https://docs.microsoft.com/en-us/azure/architecture/patterns/](https://docs.microsoft.com/en-us/azure/architecture/patterns/)
