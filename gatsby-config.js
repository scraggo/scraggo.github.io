/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

// This allows each path to be a site root for each folder
// Source: content directory
const getContentSources = () =>
  ['assets', 'blog/music', 'blog/other', 'blog/tech'].map(contentPath => {
    return {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/${contentPath}`,
        name: `${contentPath}`,
      },
    };
  });

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
    ...getContentSources(),
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-embed-video',
            options: {
              // ratio: 1.77, // Optional: Defaults to 16/9 = 1.77
              // height: 400, // Optional: Overrides optional.ratio
              // width: 800,
              related: false, //Optional: Will remove related videos from the end of an embedded YouTube video.
              noIframeBorder: true, //Optional: Disable insertion of <style> border: 0
              urlOverrides: [
                {
                  //Optional: Override URL of a service provider, e.g to enable youtube-nocookie support
                  id: 'youtube',
                  embedURL: videoId =>
                    `https://www.youtube-nocookie.com/embed/${videoId}`,
                },
              ],
              containerClass: 'embedVideo-container', //Optional: Custom CSS class for iframe container, for multiple classes separate them by space
            },
          },
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
        icon: 'static/assets/img/site/site-icon.png',
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    'gatsby-redirect-from',
    'gatsby-plugin-meta-redirect', // make sure this is always the last one
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
