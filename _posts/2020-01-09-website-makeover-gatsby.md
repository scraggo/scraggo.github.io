---
layout: post
title: "Website Makeover: Moving from Jekyll to Gatsby"
date: 2020-01-09 01:45:31 +0130
categories: ["gatsbyjs"]
author: "Dave Cohen"
---

Happy 2020! One of my new year's resolutions is to redo my website with a lot of new things in mind. Here I'll outline the changes I'm in the process of making.

## Now live: custom domain name `scraggo.com`

An important step in the whole makeover was getting an official domain name - I'm now live at [`scraggo.com`](https://www.scraggo.com)! I'm using [namecheap](https://www.namecheap.com/) as the provider. The site has been hosted with [github pages](https://pages.github.com/) since its inception and I'll probably continue to host it here.

## New year, new static site generator

My most pressing need is to be able to put content in multiple categories on one site. My content is fragmented between a WordPress site, miscellaneous blogs, and local files. I am slowly, but surely consolidating everything I want to share online here (with only a few intentional exceptions.)

- Blog posts about music, technology, and "other" (with the ability to filter for each type of post)
- My tech portfolio
- My music discography
- Any other publications

This blog (Tech Effects) has been built with the [Jekyll static site generator](https://jekyllrb.com/) since 2018. Jekyll has been good to me so far and it's an incredibly powerful tool. Despite this, I'm much more familiar with the JavaScript ecosystem and uninterested in spending time learning Ruby dependency management (Jekyll is coded in Ruby) for the plugin upgrades I need. There's been a lot of hype about Gatsby over the past couple of years - and I have zero regrets about giving it a shot.

> Get started with Gatsby:  
> [Gatsby Tutorials - Official](https://www.gatsbyjs.org/tutorial/)  
> [Gatsby Guides - Official](https://www.gatsbyjs.org/docs/guides/)

## What I'm loving about Gatsby

- Layout and Templating - Gatsby uses React for templating. I felt limited by the capabilities of the liquid layouts system provided by Jekyll.
- GraphQL - I finally have an excuse to use it!
- Flexibility - The Gatsby's plugins that are available seem to have anticipated all my needs. I don't feel confused by what's possible like I did with the Jekyll configuration.
- Ecosystem - I have all the React packages available from `npm` that I want to use.
- Pages and slugs - I'm able to organize the site however I want - tech/music/other categories (with corresponding urls) and post slugs can be in whatever format I choose.
- Syntax highlighting and line highlighting - I'll be stepping up my game with the rendering of code blocks in my posts.
- Hot reloading

## What has been tricky

- Files and urls - The site architecture took some getting used to. It seems to make sense to have the `pages` folder only for site pages, not content. That goes into a `./content` directory.
- GraphQL queries - I used a messy Regular Expression in a GraphQL query to exclude a folder in that directory (which, to be fair, I won't need to actually do). I'm still getting used to GraphQL queries in general. They are NOT traditional template strings - you can't just throw in JavaScript variables as you please:

```js
const query = graphql`
  ${notAllowed}
`;
```

I haven't _needed_ to do this, but I have some code duplication amongst my queries. (Apparently [Fragments](https://www.gatsbyjs.org/docs/using-graphql-fragments/) are canonical way to achieve this, but they're a bit too complex for my needs right now.)

## What's remaining

There's small, but mighty list of remaining things to do including:

- Changing the metadata of old posts for my new format
- Improving the styling
- Creating tag archives
- and more...

## Signing off

I'm really looking forward to the unveiling of my new site once all the updates are to complete.

I hope you're having a great new year. Here's to achieving your goals in 2020! 🥂
