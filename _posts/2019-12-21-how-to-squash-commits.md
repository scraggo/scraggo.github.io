---
layout: post
title: "How to Squash All Commits Related to a Single Issue into a Single Commit"
date: 2019-12-21 01:45:31 +0130
categories: ["git"]
author: "Dave Cohen"
---

Previously, I wrote a [guide on formatting commit messages](/git/2019/03/24/git-commit-format-squash.html). I've had the opportunity to work on a codebase that requires squashing commits into a single commit. This post is a reliable guide to squashing.

## What does "squashing" do?

It allows you to take changes that are spread amongst multiple commits and consolidate them into one.

## Why should one consider squashing commits?

- A clean history makes tracking changes to a large codebase across time much easier.
- Many commits are small and unimportant in the grand scheme to keep as standalone commits. Example: "Fix documentation spelling mistake"

An excellent way to group commits is to prefix each one with a ticket or issue number:

`[JIRA-535] my commit message`

When you look at your codebase, you'll see clean delineations of which ticket belongs to each commit.

After the changes are reviewed, before merging, imagine having one ticket-prefixed commit and a finely-pruned commit message:

```txt
[JIRA-535] Fix that crazy bug:

- break parsing function into smaller functions
- fix regex error in object file
- test that crazy bug case
```

Each commit on master will relate to a ticket:

```txt
[JIRA-523] Fix that crazy bug:
[JIRA-535] Put in UI feature:
[JIRA-514] Get data from API:
[JIRA-125] Upgrade dependency:
[JIRA-567] Homepage accessibility:
...
```

This organization is worth striving for!

## How to squash commits

To squash multiple commits into one in the branch you're on, do the following:

- Run `git log` to determine how many commits to squash. Let's assume 4.
- Run `git rebase -i HEAD~4` (with 4 being the number of commits)
- OR
- Run `git rebase -i [SHA]`
- You should see a list of commits, each commit starting with the word "pick".
- Make sure the first commit says "pick" and change the rest from "pick" to "squash". This will squash each commit into the previous commit, which will continue until every commit is squashed into the first commit.
- Save and close the editor.
- It will give you the opportunity to change the commit message. What you see is a single message containing all of the commit messages. Edit these as you wish.
- Save and close the editor again.
- Important: If you've already pushed commits to origin, and then squash them locally, you will have to force the push to your branch. - `git push origin branch-name --force`

Resources:

- <https://blog.carbonfive.com/2017/08/28/always-squash-and-rebase-your-git-commits/>
- <https://github.com/todotxt/todo.txt-android/wiki/squash-all-commits-related-to-a-single-issue-into-a-single-commit>
- <https://github.com/wprig/wprig/wiki/How-to-squash-commits>
