module.exports = {
  siteMetadata: {
    title: 'kawamurakazushi.com',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/posts/`,
      },
    },
    'gatsby-transformer-remark',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-plugin-google-tagmanager`,
      options: {
        id: 'GTM-5TGK2TM',
        includeInDevelopment: false,
      },
    },
  ],
}
