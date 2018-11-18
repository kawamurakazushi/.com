module.exports = {
  siteMetadata: {
    title: 'kawamurakazushi.com',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: `${__dirname}/posts/`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              classPrefix: 'language-',
              // inlineCodeMarker: null,
              // showLineNumbers: false,
              // noInlineHighlight: false,
            },
          },
        ],
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-google-tagmanager',
      options: {
        id: 'GTM-5TGK2TM',
        includeInDevelopment: false,
      },
    },
    'gatsby-plugin-typescript',
  ],
}
