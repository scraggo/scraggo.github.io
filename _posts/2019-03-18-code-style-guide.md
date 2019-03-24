---
layout: post
title: "Using a Code Style Guide to Enforce Team Best Practices"
date: 2019-03-18 19:45:31 +0530
categories: ["javascript"]
author: "Dave Cohen"
---

We all have opinions on what what coding best practices are and how code should be formatted. Recently, one of the teams I've been working on decided to add another member. I discovered that our coding styles were radically different. I decided to write some guidelines for our team to get us on the same page.

I quickly realized that writing a style guide from scratch is a tall order. I'd already been using the Airbnb eslint rule-set, so I read [Airbnb's style guide](https://github.com/airbnb/javascript) and found it to be an excellent jump-off point.

I hope this style guide gives you some ideas. I _highly_ encourage web development teams to create their own style guides and use tools similar to the ones we've recommended to unify their personal or team codebases.

# Team Coding Style Guide

We strive for code quality in all the applications we build. For us, code quality encompasses the following principles:

- modern syntax
- best practices
- prefer open source
- readability
- testability
- maintainability
- scalability

and more.

Much of this is taken care of by a few tools.

1. Linter - This tool automatically formats code and catches bad and/or dangerous code practices. We use the Airbnb ruleset \* with some modifications. (\* We'll go into more detail below.)
2. Code Climate - a coverage tool that analyzes the master branch and any PRs made to it. It will go further than the linter can by analyzing where code could benefit from removing repetition (following DRY - Don't Repeat Yourself), nested conditional statements, and other bad practices.

## Environment - Setting up the linter

For this project, we use yarn, not npm. (npm is fine in my personal opinion.)

Extensions:

- prettier
- eslint

Settings:

```jsonc
// To make sure prettier formats .js files as jsx:
"files.associations": {
  "\*.js": "javascriptreact"
}

"files.trimTrailingWhitespace": true,
"files.insertFinalNewline": true,
"files.trimFinalNewlines": true,

"editor.tabSize": 2,

"emmet.includeLanguages": {
    "javascript": "javascriptreact"
  },

"[javascript]": {
  "editor.formatOnSave": false
},
"eslint.alwaysShowStatus": true,
"eslint.autoFixOnSave": true,
"prettier.disableLanguages": [
  "js"
],

```

> Getting set up: [Integrating Prettier + ESLint + Airbnb Style Guide in VSCode](https://blog.echobind.com/integrating-prettier-eslint-airbnb-style-guide-in-vscode-47f07b5d7d6a)
>
> [Airbnb Eslint for React - YouTube](https://www.youtube.com/watch?v=iEBaSjYaOWs&t=375s)
>
> [How to Setup VS Code + Prettier + ESLint - YouTube](https://www.youtube.com/watch?v=YIvjKId9m2c)
>
> [Add ESLint & Prettier to VS Code for a Create React App - YouTube](https://www.youtube.com/watch?v=bfyI9yl3qfE&t=353s)

## Syntax

Since we're using React v16+ with create-react-app v2+, we can take advantage of transpiling code with Babel. ES6 (aka ES 2015) Javascript syntax provides excellent features to remove some of the ambiguities in pre ES6 code as well as make it much more readable.

> This article outlines many of its features: [ES5 vs ES6 ( With example code ) – codeburst](https://codeburst.io/es5-vs-es6-with-example-code-9901fa0136fc)

Some explicit mentions:

- Anonymous functions should _almost_ always be written with the `() => {}` syntax. Use an implicit return whenever possible.
- No need for `self = this`. We can bind and track execution context with the notation above or binding in the constructor. We prefer binding in the constructor.
  - Read: [Arrow Functions in Class Properties Might Not Be As Great As We Think](https://medium.com/@charpeni/arrow-functions-in-class-properties-might-not-be-as-great-as-we-think-3b3551c440b1)
- **Always** use `let` or `const` instead of `var`. `const` is preferred if you can avoid using `let`.
- Class syntax instead of `Class.prototype.method = ...` syntax
- Template strings instead of string concatenation.
- `import` and `export` instead of `require` and `module.exports`.
- Prefer destructuring:
  - Use default values like so `const { idx = 5 } = this.state`. If `this.state.idx` is undefined, 5 will be assigned to `idx`. (One catch, if this.state.idx is null or false, it will not be assigned the default value.)
  - You can rename a variable that might conflict with this syntax: `const { idx: idxOnState } = this.state`. You'd use it as `idxOnState` below within function scope.

### Some highlights from the Airbnb style guide

From object-curly-spacing to handling Javascript language edge cases, following the [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript) will keep your codebase in check. It's impressively precise. They don't hesitate to be definitive.

Using their [eslint rules](https://www.npmjs.com/package/eslint-config-airbnb) for React projects has definitely improved the quality of our code. Reading the guide answered a lot of my nagging questions about some of their eslint rules (which can seem bizarrely restrictive.)

In true open-source fashion, some of the rules have corresponding issues on github where developers discuss the necessity of the rule. (example: <https://github.com/airbnb/javascript/issues/794> )

#### Airbnb enforces ES6

The ES6 syntax I mentioned above can also largely be found in the Airbnb styleguide:

- spread and rest operators
- destructuring
- default parameters
- es6 class syntax
- 7.6 Never use arguments, opt to use rest syntax ... instead.
- 10.2 Do not use wildcard imports. - this has bitten me before.
- 23.5 Don’t save references to this. Use arrow functions or Function#bind.

#### Airbnb avoids some property and function edge cases

- 3.7 Do not call Object.prototype methods directly, such as hasOwnProperty, propertyIsEnumerable, and isPrototypeOf. - This eslint rule baffled me until I read this. Now, I use their ['has' package](https://www.npmjs.com/package/has).
- 7.12/13 Never mutate/reassign parameters.
- 29.1 Use Number.isNaN instead of global isNaN. eslint: no-restricted-globals - I didn't realize there was a better way!

#### Airbnb has some nice specifics I hadn't considered before

- 7.9 Always put default parameters last.
- 23.9 Acronyms and initialisms should always be all uppercased, or all lowercased.

### Some rules we haven't adopted

- 7.1 Use named function expressions instead of function declarations.

```js
// good
// lexical name distinguished from the variable-referenced invocation(s)
const short = function longUniqueMoreDescriptiveLexicalFoo() {
  // ...
};
```

While I like the idea, I agree with some of the commenters, why not just use the longer and more descriptive name?

> (Discussion: <https://github.com/airbnb/javascript/issues/794> )

- 23.4 Do not use trailing or leading underscores. eslint: no-underscore-dangle

Their reasoning makes perfect sense. However, I'm a fan of using `_` prefixing to denote to the developer that this property doesn't need to be served to the front end. There are no illusions about it being "private" or "protected", it's just a simple way to differentiate properties inside a codebase.

## Best practices

We follow the practices in these guides:

> [Clean Code vs. Dirty Code: React Best Practices - American Express Technology](https://americanexpress.io/clean-code-dirty-code/)
>
> [How To Write Better Code in React – Bits and Pieces](https://blog.bitsrc.io/how-to-write-better-code-in-react-best-practices-b8ca87d462b0)

A few points that are really important to us:

- Keep code DRY - Don't Repeat Yourself. If you can make something into a function, please do it. If you're copying and pasting, refactor into a more abstract function that can be re-used.
- Write descriptive function and variable names (self-commenting)
- Add documentation above functions that need more explanation

We follow a few basic principles coming from functional programming. Wherever possible, we keep functions pure, the data immutable, and prefer array methods like `map`, `filter`, and `reduce`.

> [Beginner's guide to functional programming in JavaScript - Opensource.com](https://opensource.com/article/17/6/functional-javascript)

There are exceptions where we may prefer for loops or non-functional principles:

- The dataset is very large
- There _must_ be a side effect

If these are the case, then it is documented with the code.

## Git commit messages

We like having a readable, targeted, and descriptive git history.

Put all related file changes in one commit with a descriptive message - ie. Avoid using `git add .` unless you're sure that the message pertains to all the files.

Add separate commits for unrelated files. When in doubt, make many, smaller commits.

Check out [How to format and edit your git commit messages](/git/2019/03/24/git-commit-format-squash.html).

## Unit testing

Components should be written with testability in mind. We use Jest with Enzyme and aim for > 90% coverage with unit and integration tests.

## JSDoc documentation

Where documentation is necessary above classes and functions, we follow the JSDoc syntax: [JSDoc - Wikipedia](https://en.wikipedia.org/wiki/JSDoc)

## Proptypes

Any props used in a component must be validated with the `prop-types` library. This article mentions the syntax we use for functional components:

> [Validating Props easily with React PropTypes – codeburst](https://codeburst.io/validating-props-easily-with-react-proptypes-96e80208207)

For class / stateful components, we prefer this syntax:

```js
class Hello extends Component {
  static propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    bio: PropTypes.string
  };

  static defaultProps = {
    name: "",
    age: null,
    bio: ""
  };
}
```

## Prefer open source before custom components

We prefer open source over custom components. We follow a POC (Proof of Concept) method when we are evaluating our custom code needs.

Open source criteria:

- Well-maintained library by larger companies
- Addresses important issues like accessibility
- Has been beta tested by many users to get rid of first defects
- Includes unit testing with high coverage

POC method

1. Discuss our needs
2. Gather options that may fit
3. Put them into a smaller version of the project
4. Discuss pros, cons
5. Make decision

If we decide to make a custom component, it should follow best practices and be able to be abstract enough to be adaptable for other purposes and use cases. It should be able to evolve with the project. It should also include unit tests with high coverage.

## Styling

We use SASS for our project. We have a number of .scss files that contain CSS with some of the convenience that SCSS gives us.

> [Sass: Sass Basics](https://sass-lang.com/guide)

### Adding a .scss file for a component

First, create a new file with the component (or other descriptive) name.

There are a few mutually exclusive ways to go about adding styling to the project:

- SCSS can be loaded into components directly like so: `import './SearchResultCard.scss';`. This will be used in just this component, which is a nice way to keep things modular.
- SCSS can be loaded into the main stylesheet by adding an import to the `index.scss` file like so: `@import './scss/_media_queries.scss';`. The import order matters, if in doubt, put your import at the bottom.

One or the other is up to the case at hand.

### Targeting selectors - avoid using this syntax:

```scss
.element {
  &-child: {
    margin: 32px;
  }
}
```

Here, the `&-child` is actually targeting the `.element-child` class. This is difficult to search for in a code base, so explicitly write out the selector instead of using the `&` as shorthand.

## Related Posts

- [How to format and edit your git commit messages](/git/2019/03/24/git-commit-format-squash.html)
- [Custom type checking - isNaN vs Number.isNaN](/javascript/2019/03/22/custom-type-checking-isnan.html)
