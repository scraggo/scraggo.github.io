---
type: post
title: 'How to Squash All Commits Related to a Single Issue into a Single Commit'
date: 2019-12-21 01:45:31 +0130
categories: ['tech']
tags: ['git']
author: 'Dave Cohen'
redirect_from:
  - /tech/how-to-squash-commits/
  - /git/2019/12/20/how-to-squash-commits.html
---

_Updated Sep 3, 2020_

This article outlines how to use the "squash" feature of an interactive `git rebase`.

## What does "squashing" do?

It allows you to take changes that are spread amongst multiple commits and consolidate them into one.

## Why should one consider squashing commits?

- A clean history makes tracking changes to a large codebase across time much easier.
- Many commits are small and unimportant in the grand scheme to keep as standalone commits. Example: "Fix documentation spelling mistake"

## How to squash commits

To squash multiple commits into one in the branch you're on, do the following:

- Run `git log` to determine how many commits to squash. Let's assume 4.
- Run `git rebase -i HEAD~4` (with 4 being the number of commits)
- OR
- Run `git rebase -i [SHA]` (where `[SHA]` is the commit _after_ the last one you want to squash. \*)
- You should see a list of commits, each commit starting with the word "pick".
- Make sure the topmost, first commit says "pick" and change the rest below from "pick" to "squash". This will squash each commit into the previous commit, which will continue until every commit is squashed into the first commit.
- Save and close the editor.
- It will give you the opportunity to change the commit message. What you see is a single message containing all of the commit messages. Edit these as you wish.
- Save and close the editor again.
- Important: If you've already pushed commits to origin, and then squash them locally, you will have to force the push to your branch. - `git push origin branch-name --force` (note that you can use `-f` instead of `--force`.)

\* _What if you want to squash and include the first commit?_ use `git rebase -i --root`. [Documentation](https://git-scm.com/docs/git-rebase#Documentation/git-rebase.txt---root)

Let's go over a complete example.

## Process overview

We finished some feature branch work that we want to merge into master. We accidentally left out the ticket number, the messages aren't so clear, and we don't need the error fixing work in its own commit:

```txt
$ git log

commit 111111111111
    improve parsing function
commit 222222222222
    fix regex error in object file
commit 333333333333
    test that crazy bug case
commit 444444444444
    etc
```

We put in a pull request, get it approved and decide to squash all the commits into one. We run the command `git rebase -i 444444444444` at our terminal.

After going through the whole process outlined above, our result commit is:

```txt
[JIRA-535] Fix that crazy bug:

- break parsing function into smaller functions
- test that crazy bug case
```

We can breathe easier; the messaging in this single commit will help future developers understand and find the work more easily.

Now, imagine looking at this tidy commit list on the master branch:

```txt
[JIRA-523] Fix that crazy bug:
[JIRA-535] Put in UI feature:
[JIRA-514] Get data from API:
[JIRA-125] Upgrade dependency:
[JIRA-567] Homepage accessibility:
...
```

Happy squashing 😁

### Related posts

[Formatting commit messages with Conventional Commits](/git-commit-format-squash)

### Resources

- <https://blog.carbonfive.com/2017/08/28/always-squash-and-rebase-your-git-commits/>
- <https://github.com/todotxt/todo.txt-android/wiki/squash-all-commits-related-to-a-single-issue-into-a-single-commit>
- <https://github.com/wprig/wprig/wiki/How-to-squash-commits>
- <https://stackoverflow.com/questions/2119480/edit-the-root-commit-in-git>
- [A Beginner’s Guide to Squashing Commits with Git Rebase](https://medium.com/@slamflipstrom/a-beginners-guide-to-squashing-commits-with-git-rebase-8185cf6e62ec)
- [How to squash multiple commits in git – Daniel Gitu – Medium](https://medium.com/@gitudaniel/how-to-squash-multiple-commits-in-git-58c22387c4ce)
- [Git: Squash your latests commits into one - ariejan de vroom](https://www.devroom.io/2011/07/05/git-squash-your-latests-commits-into-one/)
- [Squash All Commits Related to a Single Issue into a Single Commit](https://github.com/todotxt/todo.txt-android/wiki/Squash-All-Commits-Related-to-a-Single-Issue-into-a-Single-Commit)

## How to set up Visual Studio Code as your git editor

<https://code.visualstudio.com/docs/editor/versioncontrol#_vs-code-as-git-editor>
