const resolveOptions = require('./gatsby-resolve')
const path = require('path')

module.exports = {
  plugins: [
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        cssLoaderOptions: {
          esModule: false,
          modules: {
            namedExport: false,
          },
        },
      },
    },
    {
      resolve: 'gatsby-plugin-alias-imports',
      options: {
        ...resolveOptions.resolve,
      },
    },
    {
      resolve: 'gatsby-plugin-google-fonts',
      options: {
        fonts: ['EB Garamond:200,300,400,700'],
        display: 'swap',
      },
    },
    {
      resolve: 'gatsby-plugin-react-helmet',
    },
  ],
}
