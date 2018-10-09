module.exports = {
  siteMetadata: {
    title: `Sangj blog`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    `gatsby-plugin-sass`,
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        color: `tomato`,
        // Disable the loading spinner.
        showSpinner: false,
        trickle: false,
        minimum: 0.4,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/pages`,
      },
    },
    
  ],
  // pathPrefix: '/sangjdev.github.io',
};
