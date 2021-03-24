---
type: post
title: 'How to Learn Design Patterns'
date: 2021-03-23
categories: ['tech']
tags: ['design patterns']
author: 'Dave Cohen'
---

I've long been intrigued by design patterns, but when I started learning them, I realized quickly that I didn’t have a _clear learning path_. I didn’t know _how_ I should learn design patterns or _if it’s the right time_ for me to learn them.

So, I sought out to answer some questions: What are the prerequisites for learning design patterns? What material should I use and how do I avoid being scattered? How do I put them into practice?

This article is a continuation of a previous post where [I introduced design patterns and discussed the "what" and the "why" of them](/design-patterns-intro). This post aims to give you a curriculum for learning design patterns and resources that have helped me.

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

As mentioned in my [introduction to design patterns](/design-patterns-intro), there are many libraries that you may interact with that utilize design patterns internally and allow developers to take advantage of them. Some examples:

- Subscription methods in Redux [use a pub-sub Observer system](https://stackoverflow.com/questions/39977540/can-redux-be-seen-as-a-pub-sub-or-observer-pattern)
- [React lifecycle methods](https://reactjs.org/docs/state-and-lifecycle.html#adding-lifecycle-methods-to-a-class) and Database hooks (see the [Sequelize ORM](https://sequelize.org/master/manual/hooks.html) for example) utilize the Template Method pattern
- [https://github.com/davidkpiano/xstate](https://github.com/davidkpiano/xstate) is a state machine - State pattern
- You can use the Decorator pattern directly in JavaScript if you configure your application using experimental tooling. [Here's an example in React](https://medium.com/oyotech/react-decorators-5499e95a4cac). Higher Order Components (HOCs) achieve a similar effect with function composition. Read about them in [the official React docs](https://reactjs.org/docs/higher-order-components.html#convention-maximizing-composability) and [here](https://javascript.plainenglish.io/react-design-patterns-higher-order-components-62e340936652).

As you learn the internals of JavaScript systems like React, Redux, Gulp, Webpack, database systems, etc, be on the lookout for mentions of architecture. Find the code (if it’s open source) and see how the author(s) implemented the code.

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

#### My introduction to Design Patterns

I introduce design patterns and discuss the "what" and the "why" of them [here](/design-patterns-intro).
