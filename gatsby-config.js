/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    author: 'David Emanuel Cohen',
    description:
      'Software engineering, music, blog articles, and teaching resources',
    siteUrl: 'https://www.scraggo.com',
    title: `scraggo.com`,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Gatsby Starter Blog`,
        short_name: `GatsbyJS`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `content/assets/site-icon.png`,
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
  ],
};

// [
//   {
//     resolve: `gatsby-source-filesystem`,
//     options: {
//       path: `${__dirname}/content/blog`,
//       name: `blog`,
//     },
//   },
//   {
//     resolve: `gatsby-source-filesystem`,
//     options: {
//       path: `${__dirname}/content/assets`,
//       name: `assets`,
//     },
//   },
//   {
//     resolve: `gatsby-transformer-remark`,
//     options: {
//       plugins: [
//         {
//           resolve: `gatsby-remark-images`,
//           options: {
//             maxWidth: 590,
//           },
//         },
//         {
//           resolve: `gatsby-remark-responsive-iframe`,
//           options: {
//             wrapperStyle: `margin-bottom: 1.0725rem`,
//           },
//         },
//         `gatsby-remark-prismjs`,
//         `gatsby-remark-copy-linked-files`,
//         `gatsby-remark-smartypants`,
//       ],
//     },
//   },
//   `gatsby-transformer-sharp`,
//   `gatsby-plugin-sharp`,
//   {
//     resolve: `gatsby-plugin-google-analytics`,
//     options: {
//       //trackingId: `ADD YOUR TRACKING ID HERE`,
//     },
//   },
//   `gatsby-plugin-feed`,
//   {
//     resolve: `gatsby-plugin-manifest`,
//     options: {
//       name: `Gatsby Starter Blog`,
//       short_name: `GatsbyJS`,
//       start_url: `/`,
//       background_color: `#ffffff`,
//       theme_color: `#663399`,
//       display: `minimal-ui`,
//       icon: `content/assets/gatsby-icon.png`,
//     },
//   },
//   `gatsby-plugin-offline`,
//   `gatsby-plugin-react-helmet`,
//   {
//     resolve: `gatsby-plugin-typography`,
//     options: {
//       pathToConfigModule: `src/utils/typography`,
//     },
//   },
// ];
