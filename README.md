# scraggo.com

- gatsby - see docs/gatsby...
- semantic ui
- scss

## Branching and Deploying

The `master` branch only contains built files. For this reason, the `develop` branch is the de facto, most up to date source code. All branches should be branched from `develop`. Locally run `npm run deploy` to publish the site (ideally from `develop` after merging to it).

## Cleaning and Copying files to /public

In order to avoid using separate graphQL queries for images, the `clean` script runs the `task:copy` script to copy certain images (and other files) into a public directory.

## Sparse queries bug

<https://github.com/gatsbyjs/gatsby/issues/3913>

If the 'description' frontmatter field is only used sparsely, the site won't build.

If frontmatter defaults are desired, see <https://stackoverflow.com/questions/45895597/graphql-ignores-some-but-not-all-arbitrarily-assigned-markdown-frontmatter-dat>
