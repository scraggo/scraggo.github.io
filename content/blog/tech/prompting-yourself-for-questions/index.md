---
type: post
title: 'Prompting Yourself With Questions with question-prompter'
date: 2020-08-02
categories: ['tech']
tags: ['JavaScript', 'node', 'productivity']
author: 'Dave Cohen'
---

I recently created a node command line app called [question-prompter](https://github.com/scraggo/question-prompter). It prompts you at your terminal to answer questions that you come up with. After you answer them, it saves them to a `json` or `yaml` file in a directory of your choosing.

## Background

I find there's a lot of benefit to regularly checking in with myself. While many authors have written about this kind of reflection, [Tim Ferriss](https://tim.blog/2015/01/15/morning-pages/) comes to mind first. One product that helps you do this is [the Five-Minute Journal](https://thehustle.co/the-five-minute-journal-will-make-you-happier).

Knowing myself, I don't really clamour to buy off-the-shelf solutions to these sorts of things. I've taken notes from a dozen great books and wanted to ask myself questions that will help me 1) remember the content and 2) get insights from custom questions inspired by the content. I've also come up with my own personal questions that probably don't have the universal self-help appeal that these books have.

### What's the process for answering questions?

My goal is to answer at least one set a day. I type more quickly than I write by hand, so this can be done in a short amount of time (unless I decide to take my sweet time mulling over responses.)

Once a week, I'll comb through the files containing the answers for the week. My goal is to _improve iteratively_. I want to gain insights when I review these entries, like "what can I explore further?," "what have I been putting off?," etc.

### What are some of the questions I'm asking?

My questions are derived from a mish-mash of my favorite books and life-experiences. (I've included links to book summaries to help fill in missing context.)

From [The Big Leap by Gay Hendricks](https://www.amazon.com/Big-Leap-Conquer-Hidden-Level/dp/0061735361):

> Summary: <https://fourminutebooks.com/the-big-leap-summary/>

- what were the upper limits you encountered today?
- what felt good / are you grateful for?
- How long did you spend in your zone of incompetence? could you have said no?
- How long did you spend in your zone of competence?
- How long did you spend in your zone of excellence?
- How long did you spend in your zone of genius? did you experience einstein time?
- Did you argue / feel like a victim today?
- "Newtonian time: Where in my life am I not taking full ownership? What am I trying to disown? What do I need to take full ownership of?"
- What do I love to do lose time doing?
- What doesn't feel like work? What causes time to fly?
- What causes most satisfaction and money per time spent?
- What's your unique ability? What helps transform people?
- I'm at my best when I'm \_\_\_.
- The exact thing I'm doing is \_\_\.
- What I love most about it is \_\_\_.

From [Man's Search for Meaning by Viktor Frankl](https://www.amazon.com/Mans-Search-Meaning-Viktor-Frankl/dp/080701429X):

> Summary: <https://www.litcharts.com/lit/man-s-search-for-meaning/summary>

- When has work been meaningful lately?
- When has love/experience been meaningful lately?
- When has suffering been meaningful lately?
- Where could Paradoxical Intention help you?
- Which of your values could help you find meaning?

From [Seven Habits of Highly Successful People by Stephen Covey](https://www.amazon.com/dp/1476740054/ref=cm_sw_em_r_mt_dp_U_gLrNDbQGQKKX2):

> Summary: <https://blog.hubspot.com/sales/habits-of-highly-effective-people-summary>

- 1/7 Where can I be more proactive and expand my circle of influence?
- 2/7 What's the end goal? How do I want people to talk about me at my funeral? What are the different roles in my life? What scares me and how would I handle that situation?
- 3/7 What important, but non-urgent items should I pay attention to?
- 4/7 Are there any upcoming interactions that can be Win-Win?
- 5/7 How can I interact with more empathy in conversation? How can I be more conscientious of problems in presentations?
- 6/7 How can I better recognize the value of others' differences and synergize?
- 7/7 How can I more regularly sharpen the saw - Physically, Spiritually, Mentally, Socially, Emotionally? (at the very least, once a week)

Finally, here are some of my own questions:

- High-lights for today? Low-lights?
- Did you have any dreams?
- What are your priorities for today and the near future?
- What would be fun for you to do today and the near future?
- What values have you exemplified or have you missed lately?
- What needs were met or not met today?
- Any recent insights that can improve your personal story?

## Tech-talk: How I built the app

See the source code for [question-prompter](https://github.com/scraggo/question-prompter).

### High-level

1. User creates a "configuration" file that contains the output path and the questions themselves. It can be `json` or `yaml`. (I prefer `yaml` because it looks much cleaner.)
2. We call the top-level command line interface with the path to the configuration file as a required argument. You can optionally specify the output format - it's `json` by default.
3. You can choose to review notes or to answer questions. If you choose to review notes, it'll give you a list of files you can open.
4. If you choose to answer questions, you choose which questions set you'll answer, then answer the questions.
5. Finally, your answers are saved with a copy of the questions in your specified output path.

### Packages spotlight

There are a number of npm packages in use for the app. The highlights are:

- [commander](https://www.npmjs.com/package/commander) - this is a go-to package to make the initial command line input processing easier.
- [inquirer](https://www.npmjs.com/package/inquirer) - this is the star of the show and inspired the app. It allows you to use your keyboard to pick answers from a list of choices, fill in text answers, and a lot more.
- [@babel/node](https://babeljs.io/docs/en/babel-node) - this allows me to use ES6+ syntax in dev mode. I enjoy it!

### Architecture

```txt
|____src
| |____io-handlers.js
| |____index.js
| |____inquirer.js
| |____commander.js

| |____data
| | |____selectors.js

| |____example
| | |____experience2.txt
| | |____experience1.txt
| | |____example.json

| |____utils
| | |____exec.js
| | |____fs.js
```

**src/**

These files contain the business logic of the application.

**src/data/selectors.js**

To select values from the user input configuration paths, I used [selectors](https://medium.com/@pearlmcphee/selectors-react-redux-reselect-9ab984688dd4). I haven't opted into using `reselect` because this app is very small. There's no need to optimize performance with memoization at this point.

**src/example**

Here are example files so you can get started right away! Run `npm run start-dev-ex` to load them in.

**src/utils**

I find that wrapping utilities makes my life easier. When I call the wrappers inside business logic files (like `io-handlers` or `inquirer`), it clearly separates the file-system handling from the app-specific processing.
