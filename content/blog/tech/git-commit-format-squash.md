---
type: post
title: 'How to format and edit your git commit messages'
date: 2019-03-24 19:45:31 +0530
categories: ['tech']
tags: ['git']
author: 'Dave Cohen'
redirect_from:
  - /tech/git-commit-format-squash/
  - /git/2019/03/24/git-commit-format-squash.html
---

When writing commit messages, it's ideal to make them easy for another developer to read and understand exactly what's in the commit. Oftentimes, though, we write commit messages quickly just to push a branch at the end of a workday, for instance (I know I'm guilty of this).

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

The conventional commit format is definitely worth trying for both team and personal projects.

## Squashing commits

Want to edit your commit messages before you do a pull request? Squash your commits!

Here's [my guide on how to do it](/how-to-squash-commits).

## Related posts

[Using a Code Style Guide to Enforce Team Best Practices](/tech/code-style-guide)
