---
type: post
title: 'Combining Flyweight and Memento Design Patterns'
date: 2020-11-08
categories: ['tech']
tags: ['TypeScript', 'design patterns']
author: 'Dave Cohen'
---

The many advantages of combining design patterns

You might be familiar with the "Gang of Four Design Patterns":

> Gang of Four Design Patterns is the collection of 23 design patterns from the book "Design Patterns: Elements of Reusable Object-Oriented Software".
> This book was first published in 1994 and it’s one of the most popular books to learn design patterns. The book was authored by Erich Gamma, Richard Helm, Ralph Johnson, and John Vlissides. It got nicknamed as Gangs of Four design patterns because of four authors. Furthermore, it got a shorter name as "GoF Design Patterns".
> [source](https://www.journaldev.com/31902/gangs-of-four-gof-design-patterns)

Learning them is no small feat. Luckily, my mentor pointed me to a fantastic online resource, [Refactoring Guru](https://refactoring.guru/). Each of the classic patterns is described and explained with illustrative examples in multiple languages. The process of learning them has given me the opportunity to work on classic object-oriented programming (OOP) with TypeScript - something I've wanted to do for a long time.

Another suggestion from my mentor was to _combine_ design patterns. I've been systematically combining patterns and simultaneously thinking of applications for them. Having gone through this process, I can say that I'm much more confident about this topic as a whole.

## Why combine patterns?

1. You're forced to understand how the patterns work on their own, before combining.
2. You strengthen your understanding of the vocabulary/terminology used for each pattern.
3. You begin to gain intuition about appropriate applications for the patterns.

## Why combine the Flyweight and Memento patterns?

Common problems we face in designing applications: state management and performance. We use the Flyweight to address the performance aspect by creating a shared repository for large objects. We use the Memento pattern to handle state management - it gives us the ability to save and restore snapshot of the state at any given moment.

![Flyweight-memento combination](./combo1.png)

## How do the patterns work separately?

Every design pattern is a tool-kit that affords the developer certain advantages. I think of these advantages as "affordances" (as discussed in the book [The Design of Everyday Things](https://en.wikipedia.org/wiki/The_Design_of_Everyday_Things)). I've outlined all the patterns with which I've worked with the following outline:

- Common Problem Scenario
- Terminology
  - Transformation
- Change Dimensions
- Scalability
- Couplings
- Communication
  - Access Control
  - Encapsulation
- Performance
- Similarities

### How the Flyweight pattern works

The [Flyweight pattern](https://refactoring.guru/design-patterns/flyweight) greatly reduces RAM usage for objects that are used repeatedly throughout an application. Each object usage has a _shared_ (intrinsic) state and a _unique_ (extrinsic) state. The flyweight intelligently caches the shared state and allows operations that involve both the unique and shared states of an object.

I very much encourage you to read through [Flyweight pattern | Refactoring Guru](https://refactoring.guru/design-patterns/flyweight). It contains a lot more information, including the UML diagram.

Here's my summary of the pattern's affordances, properties, and methods:

- Common Problem Scenario - Your app needs to create lots of unique objects that share some common elements. Your program crashes because these objects are taking up a lot of memory.
- Terminology
  - `A` - "Flyweight". `A.sharedState`. `A.operation(uniqueState)`
  - `B` - "Context". Holds uniqueState and a flyweight initialized via constructor. `B.operation` calls `A.operation`.
  - `C` - "Factory" - handles the caching and retrieval of `A`.
- Change Dimensions / Scalability - We can add as many `A`s as RAM allows. This allows us to scale upwards and add as many `B`s as we’d like.
- Couplings - `B` must contain `A`, they are necessarily linked.
- Communication - The client only interacts with `B` by calling `B`’s constructor with desired properties. `B` calls `C` to get an `A`.
  - Access Control / Encapsulation - `A` can’t be mutated, while `B`’s unique state can be
- Performance - We take advantage of caching and using objects by reference instead of value
- Similarities to other patterns - see [Flyweight pattern](https://refactoring.guru/design-patterns/flyweight)

### How the Memento pattern works

### **Behavioral - Memento**

"The [Memento pattern](https://refactoring.guru/design-patterns/memento) is a behavioral design pattern that lets you save and restore the previous state of an object without revealing the details of its implementation."

Here's my summary:

- Common Problem Scenario - You’d like to add an undo/redo stack to your application. The objects you want to save have private state fields, yet you need access to them.
- Terminology -
  - `A` - "Originator" object that holds state. `A.state`, `A.save()`, `A.restore()`
  - `B` - "Memento" object that contains `A`’s state and grants privileged access only to `A`. `B.state` (contains `A.state`), `B.getState()` -> a public getter for a selected state property
  - `C` - "Caretaker" class that uses `B`’s limited interface to create a stack/history. `C.history` is a stack of `B`s. Contains `A`. `C.undo` -> calls `A.restore` of a previous `B`.
- Change Dimensions / Scalability - We can create as many `B`s as needed, as long as we’re mindful of performance.
- Couplings - Highly coupled objects. `B` necessarily mirrors `A`. `C` contains both `A` and a stack of `B`.
- Communication - We’ve separated concerns by creating a separate `B` object and removing the need for `A` to handle the history stack.
  - Access Control / Encapsulation - The client can’t tamper with `B`.
- Performance - If the stack becomes too large or the state stored in `B` is large, performance can be affected adversely.

For similarities to other patterns, the UML diagram, and more, visit [Memento pattern](https://refactoring.guru/design-patterns/memento).

## Combination walk-through

How they work together to solve one problem
typescript
