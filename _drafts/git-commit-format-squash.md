---
layout: post
title: "How to format and edit/squash your git commit messages"
date: 2019-03-24 19:45:31 +0530
categories: ["git"]
author: "Dave Cohen"
---

When developing on a team, it can sometimes be difficult to sort out the meaning of other team members' commit messages. Oftentimes, for myself, I'm tempted to write a commit message quickly so I can push my branch at the end of a workday.

One team member brought the [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0-beta.3/) format to our attention. I've enjoyed using it and seeing the results when reviewing pull requests.

To enforce this pattern, I recommend using this tool: [conventional-changelog/commitlint: 📓 Lint commit messages](https://github.com/conventional-changelog/commitlint).

Verbatim from the readme:

---

In general the pattern mostly looks like this:

```txt
type(scope?): subject  #scope is optional
```

Real world examples can look like this:

```txt
chore: run tests on travis ci
fix(server): send cors headers
feat(blog): add comment section
```

Common types:

- build
- ci
- chore
- docs
- feat
- fix
- perf
- refactor
- revert
- style
- test

---

Want to edit your commit messages before you do a pull request? Squash your commits! Here are four nifty guides on how to do it:

> [A Beginner’s Guide to Squashing Commits with Git Rebase](https://medium.com/@slamflipstrom/a-beginners-guide-to-squashing-commits-with-git-rebase-8185cf6e62ec)
>
> [How to squash multiple commits in git – Daniel Gitu – Medium](https://medium.com/@gitudaniel/how-to-squash-multiple-commits-in-git-58c22387c4ce)
>
> [Git: Squash your latests commits into one | ariejan de vroom](https://www.devroom.io/2011/07/05/git-squash-your-latests-commits-into-one/)
>
> [Squash All Commits Related to a Single Issue into a Single Commit · todotxt/todo.txt-android Wiki](https://github.com/todotxt/todo.txt-android/wiki/Squash-All-Commits-Related-to-a-Single-Issue-into-a-Single-Commit)
