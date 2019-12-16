require("dotenv").config();

const postQuery = `
{
  posts: allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/posts/"}}) {
    edges {
      node {
        objectID: id
        fields {
          slug
        }
        frontmatter {
          title
        }
        excerpt(pruneLength: 5000)
      }
    }
  }
}
`;

const projectQuery = `
{
  projects: allProject {
    edges {
      node {
        objectID: id
        name
        readme {
          childMarkdownRemark {
            excerpt(pruneLength: 5000)
          }
        }
      }
    }
  }
}
`;

const settings = { attributesToSnippet: ["excerpt:20"] };
const queries = [
  {
    query: projectQuery,
    transformer: ({ data }) =>
      data.projects.edges.map(({ node: { name, readme, ...rest } }) => ({
        title: name,
        path: `/projects/${name}`,
        ...readme.childMarkdownRemark,
        ...rest,
      })),
    indexName: "kawamurakazushi_projects",
    settings,
  },
  {
    query: postQuery,
    transformer: ({ data }) =>
      data.posts.edges.map(
        ({
          node: {
            frontmatter,
            fields: { slug },
            ...rest
          },
        }) => ({
          path: slug,
          ...frontmatter,
          ...rest,
        })
      ),
    indexName: "kawamurakazushi_posts",
    settings,
  },
];

module.exports = {
  plugins: [
    "gatsby-plugin-react-helmet",
    {
      options: {
        name: "posts",
        path: `${__dirname}/posts/`,
        ignore: process.env.NODE_ENV === "production" ? [`**/draft.md`] : [],
      },
      resolve: "gatsby-source-filesystem",
    },
    {
      options: {
        name: "books",
        path: `${__dirname}/books/`,
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
    {
      resolve: `gatsby-plugin-algolia`,
      options: {
        appId: process.env.GATSBY_ALGOLIA_APP_ID,
        apiKey: process.env.GATSBY_ALGOLIA_ADMIN_KEY,
        queries,
        chunkSize: 10000,
      },
    },
    {
      resolve: "gatsby-plugin-feed",
      options: {
        feeds: [
          {
            serialize: ({ query: { site, allPost } }) => {
              return allPost.edges.map(({ node }) => {
                const {
                  frontmatter,
                  excerpt,
                  fields,
                  html,
                } = node.childMarkdownRemark;
                return {
                  ...frontmatter,
                  description: excerpt,
                  url: `${site.siteMetadata.siteUrl}${fields.slug}`,
                  guid: `${site.siteMetadata.siteUrl}${fields.slug}`,
                  custom_elements: [{ "content:encoded": html }],
                };
              });
            },
            query: `
              {
                allPost: allFile(
                  filter: {
                    internal: { mediaType: { eq: "text/markdown" } }
                    sourceInstanceName: { eq: "posts" }
                  }
                  sort: {
                    fields: childMarkdownRemark___frontmatter___date
                    order: DESC
                  }
                ) {
                  edges {
                    node {
                      childMarkdownRemark {
                        excerpt
                        html
                        fields {
                          slug
                        }
                        frontmatter {
                          title
                          date
                        }
                      }
                    }
                  }
                }
              }
            `,
            output: "/rss.xml",
          },
        ],
      },
    },
  ],
  siteMetadata: {
    title: "kawamurakazushi.com",
    siteUrl: "https://kawamurakazushi.com",
    description: "Kazushi Kawamura's Software Engineering Portfolio / Blog.",
  },
};
