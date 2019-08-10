const path = require("path");

// import { fetch } from "whatwg-fetch";
const fetch = require("node-fetch");

const { createFilePath } = require("gatsby-source-filesystem");

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;
  if (node.internal.type === "MarkdownRemark") {
    const slug = createFilePath({ node, getNode, basePath: "pages" });
    createNodeField({
      node,
      name: "slug",
      value: slug,
    });
  }
};

exports.sourceNodes = async ({
  actions,
  createNodeId,
  createContentDigest,
}) => {
  const { createNode } = actions;

  const nodes = [
    "spice-blending-puzzle",
    "seo-editor",
    "figma-map-maker",
    "figma-walker",
    "figma-format",
    "figma-sort-it",
    "vscode-grep",
  ].map(async p => {
    const d = await (await fetch(
      `https://api.github.com/repos/kawamurakazushi/${p}`
    )).json();

    const data = {
      url: `https://github.com/kawamurakazushi/${p}`,
      description: d.description,
      name: p,
    };

    const nodeMeta = {
      id: createNodeId(`project/${p}`),
      parent: null,
      children: [],
      internal: {
        type: "project",
        content: JSON.stringify(data),
        contentDigest: createContentDigest(data),
      },
    };
    return { ...data, ...nodeMeta };
  });

  return new Promise(async (resolve, _) => {
    for (const node of await Promise.all(nodes)) {
      createNode(node);
    }
    resolve();
  });
};

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  return new Promise((resolve, reject) => {
    graphql(`
      {
        allMarkdownRemark {
          edges {
            node {
              fields {
                slug
              }
            }
          }
        }
        allProject {
          edges {
            node {
              name
              url
              description
            }
          }
        }
      }
    `).then(result => {
      result.data.allMarkdownRemark.edges.forEach(({ node }) => {
        createPage({
          path: node.fields.slug,
          component: path.resolve(`./src/templates/blog.tsx`),
          context: {
            slug: node.fields.slug,
          },
        });
      });

      result.data.allProject.edges.forEach(({ node }) => {
        createPage({
          path: node.name,
          component: path.resolve(`./src/templates/project.tsx`),
          context: {
            id: node.id,
          },
        });
      });

      resolve();
    });
  });
};
