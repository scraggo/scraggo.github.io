---
type: post
title: 'Combining Flyweight and Memento Design Patterns'
date: 2020-11-08
categories: ['tech']
tags: ['TypeScript', 'design patterns']
author: 'Dave Cohen'
---

The many advantages of combining design patterns

You might be familiar with the 23 "Gang of Four Design Patterns".

> [read about them here](https://www.journaldev.com/31902/gangs-of-four-gof-design-patterns)

Learning them is no small feat. Luckily, my mentor pointed me to a fantastic online resource, [Refactoring Guru](https://refactoring.guru/). Each of the classic patterns is described and explained with illustrative examples in multiple languages. The process of learning them has given me the opportunity to work on classic object-oriented programming (OOP) with TypeScript - something I've wanted to do for a long time.

> [Refactoring Guru - an excellent resource I'll be referring to throughout the article](https://refactoring.guru/)

Another suggestion from my mentor was to _combine_ design patterns. I've been systematically combining patterns and simultaneously thinking of applications for them. Having gone through this process, I can say that I'm much more confident about this topic as a whole.

## Why combine patterns?

1. You're forced to understand how the patterns work on their own, before combining.
2. You strengthen your understanding of the vocabulary/terminology used for each pattern.
3. You begin to gain intuition about appropriate applications for the patterns.

## Why combine the Flyweight and Memento patterns?

Common problems we face in designing applications include state management and performance.

I created minimal a slides presentation app where both of these concerns need to be addressed.

![Flyweight-memento combination app example](./presentation_app.png)

- We use the **Flyweight pattern** to address the performance aspect by creating a shared repository for large objects - images in this case.
- We use the **Memento pattern** to handle state management - we want to have a command history with the ability to save and restore a snapshot of the state at any given moment.

Disclaimers:

- This app doesn't have a user interface - I've only included _models_ containing the underlying logic for the user interface that could be implemented later.
- Some details are omitted - ones that don't illustrate the core points of combining these two design patterns.

## How do the patterns work separately?

Every design pattern is a tool-kit that affords the developer certain advantages. I think of these advantages as "affordances" (as discussed in the book [The Design of Everyday Things](https://en.wikipedia.org/wiki/The_Design_of_Everyday_Things)). The process of creating an outline for each pattern with these points has proven fruitful for me:

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

The [Flyweight pattern](https://refactoring.guru/design-patterns/flyweight) greatly reduces RAM usage for objects that are used repeatedly throughout an application. Each object usage has a _shared_ (intrinsic) state and (optionally) a _unique_ (extrinsic) state. The flyweight caches the shared states by key and allows operations that involve both the unique and shared states of an object.

I very much encourage you to read through [Flyweight pattern | Refactoring Guru](https://refactoring.guru/design-patterns/flyweight). It contains a lot more information, including the UML diagram.

Here's a summary of the pattern's affordances, properties, and methods:

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

For similarities to other patterns, the UML diagram, and more, visit [Flyweight pattern](https://refactoring.guru/design-patterns/flyweight)

### How the Memento pattern works

"The [Memento pattern](https://refactoring.guru/design-patterns/memento) is a behavioral design pattern that lets you save and restore the previous state of an object without revealing the details of its implementation." [source](https://refactoring.guru/design-patterns/memento)

Here's a summary of the pattern's affordances, properties, and methods:

- Common Problem Scenario - You’d like to add an undo/redo stack to your application. The objects you want to save have private state fields, yet you need access to them.
- Terminology -
  - `A` - "Originator" object that holds state. `A.state`, `A.save()`, `A.restore()`
  - `B` - "Memento" object that contains `A`’s state and grants privileged access only to `A`. `B.state` (contains `A.state`), `B.getState()` -> a public getter for a selected state property
  - `C` - "Caretaker" class that uses `B`’s limited interface to create a stack/history. `C.history` is a stack of `B`s. Contains `A`. `C.undo` -> calls `A.restore` of a previous `B`.
- Change Dimensions / Scalability - We can create as many `B`s as needed, as long as we’re mindful of performance.
- Couplings - Highly coupled objects. `B` necessarily mirrors `A`. `C` contains both `A` and a stack of `B`.
- Communication - We’ve separated concerns by creating a separate `B` object and removing the need for `A` to handle the history stack.
  - Access Control / Encapsulation - The client can’t tamper with `A` or `B`.
- Performance - If the stack becomes too large or the state stored in `B` is large, performance can be affected adversely.

For similarities to other patterns, the UML diagram, and more, visit [Memento pattern](https://refactoring.guru/design-patterns/memento).

## Combination walk-through

We briefly mentioned that the Flyweight and Memento patterns can work together to address a few common concerns: state management and performance. I'll walk you though the interfaces and classes that make up the presentation app. I'll also go into how specific TypeScript features helped with the design.

### Interfaces

```ts
// The image Flyweight - its shared state
interface ImageShared { ... };

// The unique state of the image
interface ImageUnique { ... };

// The necessary context to back up the state of an image
interface ImageBackupState { ... }

// The factory object which stores the image Flyweights
interface ImageFlyweights { ... };

// The interface for a generic Memento class
interface Memento { ... };

// This contains the text and image Mementos for a slide
interface SlideMemento { ... };
```

[See the full source code](https://github.com/scraggo/design-patterns-refactoring-guru)

#### About interfaces

To quote <https://www.typescriptlang.org/docs/handbook/interfaces.html>:

> One of TypeScript’s core principles is that type checking focuses on the shape that values have. This is sometimes called “duck typing” or “structural subtyping”. In TypeScript, interfaces fill the role of naming these types, and are a powerful way of defining contracts within your code as well as contracts with code outside of your project.

This means that we can define the _shape_ of objects - which keys they must have, the types of their corresponding values, which properties are optional/read-only, and more.

This gels perfectly with object-oriented thinking - instead of passing objects around that don't have a pre-defined interface, we're treating every data structure as a meaningful entity.

Let's take the first interface in our app as an example, `ImageShared`. Without interfaces, functions and other consumers would have to specify all the pieces in the object for the shared state it might need:

```ts
function myFunction(img: { data: string, name: string } ) { ... }
```

Instead, let's encapsulate this `img` parameter in an interface:

```ts
interface ImageShared {
  data: string;
  name: string;
}
```

Now it's type can be easily referred to in any function or consumer:

```ts
class ImageFlyweightFactory {
  // In a function's parameter signature:
  private getKey(state: ImageShared): string {
    return state.name;
  }
}

// As a subset of another interface:
interface ImageBackupState {
  sharedState: ImageShared; // <--
  uniqueState: ImageUnique;
}
```

The `Memento` interface was _implemented_ as a class:

```ts
export interface Memento {
  getState(): object;
  getName(): string;
  getDate(): string;
}

class ConcreteMemento implements Memento { ... }
```

Using an interface this way is great for a class that doesn't need to inherit any logic from its base class.

### Classes

The `ConcreteMemento` class is responsible for holding the date and backup state of _a single backup_ of the "originator" component (the `Slide` class). Upon request, it can furnish this information as it sees fit.

After initialization, an example `ConcreteMemento`:

```txt
ConcreteMemento {
  state: { images: [ [Object] ], text: [ 'hi' ] },
  date: '2020-11-30 00:47:05'
}
```

The `Image` class holds the full "context" of an image, including the "shared" state and the "unique" state. It contains a `toHTML` method that will create a DOM node for the image.

After initialization, an example `Image`:

```txt
Image {
  sharedState: { data: '101010', name: 'butterfly' },
  uniqueState: { height: 100, width: 100, x: 0, y: 0 }
}
```

The `ImageFlyweightFactory` class contains the collection of `ImageShared` objects. It caches them by their `name` property. We construct `Image` objects with objects fetched from the factory. The `getFlyweight` method shows how this caching works. If the `key` is already in the cache of flyweights, we return the `sharedState` that's stored. If not, we add the `sharedState` to the cache and then return it:

```ts
class ImageFlyweightFactory {
  // ...
  public getFlyweight(sharedState: ImageShared): ImageShared {
    const key = this.getKey(sharedState);

    if (key in this.flyweights) {
      // FlyweightFactory: Reusing existing flyweight.
    } else {
      // FlyweightFactory: Can't find a flyweight, creating new one.
      this.flyweights[key] = sharedState;
    }

    return this.flyweights[key];
  }
}
```

An example populated `ImageFlyweightFactory`:

```txt
ImageFlyweightFactory {
  flyweights: {
    butterfly: { data: '101010', name: 'butterfly' },
    flower: { data: '101001', name: 'flower' },
    sun: { data: '101101', name: 'sun' }
  }
}
```

```ts
class Slide { ... }
```

```ts
class History { ... }
```

```ts
class App { ... }
```
