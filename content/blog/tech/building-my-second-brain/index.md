---
type: post
title: "How I'm Building My Second Brain"
date: 2023-06-01
categories: ['tech']
tags: ['productivity', 'tech talk']
author: 'Dave Cohen'
---

## Slides + Video

["How I'm building my second brain" video (YouTube)](https://youtu.be/5-5aO-F6HA4)

["How I'm building my second brain" slides (PDF)](second-brain-slides.pdf)

## What’s a "second brain?"

In concept, it's an external information collection that aids thinking and memory.

The way I put this into practice is a collection of markdown notes linked with bi-directional backlinks (notated with double square brackets: `[[]]`)

The collection is basically a wiki.

The wider concept is [Personal Knowledge Management (PKM)](https://en.wikipedia.org/wiki/Personal_knowledge_management).

I first discovered these ideas through Zettelkasten concepts.

Around the net, it's also known as:

- digital gardening
- life operating system
- "Linking your Thinking"

_See "Resources" below for more info on the related concepts._

## The problem: One brain is limited

- Juggling projects
- Learning something new can be intimidating
- Disparate sources: Slack, emails, bookmarks, notes, etc
- Googling repeatedly (but…sites go down)
- **Are we able to make notes and discover them without too much friction?**

## Second brain benefits

- Solidify knowledge
- Readily search and share ideas
- Consolidate and reduce clutter ([collector's fallacy](https://zettelkasten.de/posts/collectors-fallacy/))
- Structure emerges from links within notes, not directories

## What are Backlinks?

Weblinks are uni-directional - the destination has no knowledge of the source that linked to it. **Backlinks are bi-directional - the destination links back to all of its sources.**

backlink syntax: `[[link-to-note]]` (note that we omit the `.md` file extension.)

## Demo - The practice of building a second brain

1\. Taking notes on [https://blog.appsignal.com/2021/09/01/best-practices-for-logging-in-nodejs.html](https://blog.appsignal.com/2021/09/01/best-practices-for-logging-in-nodejs.html)

- Copying content from browser documents into a google doc to retain formatting
- [Docs to Markdown](https://gsuite.google.com/marketplace/app/docs_to_markdown/700168918607): convert formatted text to markdown in Google Docs
- Paste markdown into your notes collection
- Give it a unique filename like `node-logging-best-practices-isiah.md`

2\. Putting link to above notes into a reference schema, aka "Map of Content"

My dev notes schema:

```txt
- Bash
  - [[bash-notes]]
- CSS
  - [[css-grid]]
- Docker
  - [[docker-notes]]
- JavaScript
  - [[node-notes]]
  - [[react-notes]]
- ... etc
```

Since I have a lot of notes on node, I'll put it in the `node-notes.md` file:

```txt
Node notes:

- [[node-logging-best-practices-isiah]]
- [[node-log-object]]
- ... etc
```

3\. Writing: linking original writings to reference material

filename: `logging-best-practices-dec.md`

```txt
What I've learned about logging

Combining [[node-logging-best-practices-isaiah]] with [[logging-best-practices-uhrig]]

- experiences with lambdas
- experiences with chat-bot and sumo
- [[node-log-object]]

220607
```

4\. Task management: Todo list that links to project docs with original writings

filename: `0-this-week-todo-zk-example.md`

```txt
# This week todo

## Sprint work

[[JIRA-1234-upgrade-all-the-things-zk-example]]

## Else

Don't forget -> [[0-backlog-zk-example]]

@! Respond to email

Respond to slack message

Write [[logging-best-practices-dec]]

Prepare slides

Post meeting notes

## Done

x 2022-03-01 Thing I got done
```

filename: `0-backlog-zk-example.md`

```txt
# Todo backlog

Working group

Professional dev:
- Learn x
- Learn y
```

filename: `JIRA-1234-upgrade-all-the-things-zk-example.md`

```txt
# Here are some very interesting notes

Here are some very interesting notes
```

## Parting thoughts

Experiment to find _your_ way

- Research: collect information and organize it in a way that's relevant to you
- Create: synthesize your collected knowledge into original writings
- Manage: keep track of work in progress, increase productivity

Make a habit of connecting as much as you can

- creative synthesis: new ideas form effortlessly from linked ideas

Compound growth

- In ~6 months, work/personal second brains: 870 backlinks in 226 files. >50 article highlights, ~12 book takeaways, weekly micro-blogging

## Resources

### Methodology

[Zettelkasten, Linking Your Thinking, and Nick Milo's Search for Ground | The Daily Pony](https://writing.bobdoto.computer/zettelkasten-linking-your-thinking-and-nick-milos-search-for-ground/)

- [Hacker News comments for ^](https://news.ycombinator.com/item?id=31507132)
- [Podcast episode with Nick Milo](https://www.asianefficiency.com/podcasts/387-nick-milo/)

[Introduction to the Zettelkasten Method](https://zettelkasten.de/introduction/)

- [collector's fallacy](https://zettelkasten.de/posts/collectors-fallacy/)

[The PARA Method: A Universal System for Organizing Digital Information - Forte Labs](https://fortelabs.co/blog/para/)

[How to Manage Your Digital Files: 9 Tips and Tools to Keep You Organized](https://www.makeuseof.com/tag/manage-digital-files/) see The Noguchi Filing System

### Tools

- [Copy As Markdown](http://github.com/yorkxin/copy-as-markdown) browser extension
- [Docs to Markdown](https://gsuite.google.com/marketplace/app/docs_to_markdown/700168918607): convert formatted text to markdown in Google Docs

"VS Code - flavored" second brain:

- [vscodium](http://vscodium.com/) (vscode "core" built without telemetry)
- [svsool.markdown-memo extension](https://marketplace.visualstudio.com/items?itemName=svsool.markdown-memo) for backlinks
- You might instead like Obsidian, logseq, Notion, Roam, etc.

Example sites:

- [Software comparison – PKM Zettelkasten](https://zk.zettel.page/software-comparison)
- [Andy Matuschak's backlinked notes](https://notes.andymatuschak.org/Evergreen_notes)

Knowledge site generators:

- [https://github.com/binyamin/eleventy-garden](https://github.com/binyamin/eleventy-garden)
- [https://github.com/mathieudutour/gatsby-digital-garden/](https://github.com/mathieudutour/gatsby-digital-garden/)
