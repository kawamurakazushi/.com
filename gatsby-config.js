module.exports = {
  plugins: [
    "gatsby-plugin-react-helmet",
    {
      options: {
        name: "src",
        path: `${__dirname}/posts/`,
      },
      resolve: "gatsby-source-filesystem",
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    {
      options: {
        plugins: [
          {
            options: {
              maxWidth: 960,
            },
            resolve: `gatsby-remark-images`,
          },
          {
            options: {
              aliases: {},
              inlineCodeMarker: "`",
              noInlineHighlight: false,
              showLineNumbers: false,
            },
            resolve: `gatsby-remark-prismjs`,
          },
        ],
      },
      resolve: `gatsby-transformer-remark`,
    },
    {
      options: {
        id: "GTM-5TGK2TM",
        includeInDevelopment: false,
      },
      resolve: "gatsby-plugin-google-tagmanager",
    },
    "gatsby-plugin-typescript",
  ],
  siteMetadata: {
    title: "kawamurakazushi.com",
  },
};
