module.exports = {
  siteMetadata: {
    title: 'ifSilence.com',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/utils/typography.js',
      }
    },
    {
      resolve: `gatsby-plugin-create-client-paths`,
      options: {
        prefixes: [`/app/*`]
      },
    },
  ],
};
