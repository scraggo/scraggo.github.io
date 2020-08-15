---
type: post
title: "Tech Talk - How I'd Improve My Capstone Project"
date: 2020-08-15
categories: ['tech']
tags: ['JavaScript', 'Electron', 'Coding Bootcamps', 'Tech Talk']
author: 'Dave Cohen'
# redirect_from:
#   - /tech/custom-type-checking-isnan/
#   - /javascript/2019/03/22/custom-type-checking-isnan.html
---

In February 2020, I returned to [my bootcamp](https://www.fullstackacademy.com/) to give a tech talk on what I'd do to improve my Capstone project.

> [Download the slides here (PDF)](./VoCode-Presentation-FSA-200218-public.pdf)

I was excited to share what I've learned so far from working on enterprise software for almost 2 years.

The talk is a deep dive into the codebase that me and 3 others worked on as our graduating project (the "Capstone") with a perspective shift:

**What if we had to refactor this project so that it could be worked on for years to come?**

## About Vocode

Vocode (our Capstone project) is a desktop app that allows you to call up code snippets and navigate to urls using your voice. Some other features:

- It has a built in text editor where you can add or edit a code snippet. It can be typed in or uploaded as a file. Afterwards, you’re able to call it up with your voice.
- You can choose from snippets that are available publicly and add them to your personal collection.
- You can add your username to some common developer urls. You could say “Github” for example, and it would pull up your github page in your default web browser.

Vocode is a full-stack Javascript application. We used React, Redux, Postgres, Express, and chose to use Electron, a framework which allows you to create desktop apps with Javascript. Having it be a desktop app allowed us to set a keyboard shortcut for recording while in any text editor.

## What I'd change about Vocode

Looking back at this project after a long time was a bit of a shock! Combing through it, these areas stood out to me:

- Documentation was insufficient
- Interfaces for internal code was lacking
- Tests did not make definitive enough assertions
- Browse-ability was lacking, a mixture of domains, callback hell
- Performance wasn't scrutinized
- Security was not on our minds
- Error-handling did not go beyond `console.error`
- There was no “product” perspective that would intelligently guide the project according to user needs.

I go into full detail on how I'd improve these things in the talk - with code examples and in-depth explanations.

## Check out the slides and the video

> [Download the slides here (PDF)](./VoCode-Presentation-FSA-200218-public.pdf)

(Video)

## Contact me

(related posts)
