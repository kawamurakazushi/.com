import {
  CreateNodeArgs,
  CreatePagesArgs,
  NodeInput,
  SourceNodesArgs,
} from "gatsby";
import { createFilePath } from "gatsby-source-filesystem";
import nodeFetch from "node-fetch";
import * as path from "path";
import { guard, number, object, string, array } from "decoders";

export const onCreateNode = ({ node, getNode, actions }: CreateNodeArgs) => {
  const { createNodeField } = actions;
  if (node.internal.type === "MarkdownRemark") {
    const slug = createFilePath({ node, getNode, basePath: "pages" });
    createNodeField({
      name: "slug",
      node,
      value: slug,
    });
  }
};

export const sourceNodes = async ({
  actions,
  createNodeId,
  createContentDigest,
}: SourceNodesArgs) => {
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
    const d = await (await nodeFetch(
      `https://api.github.com/repos/kawamurakazushi/${p}`
    )).json();

    const data = {
      description: d.description,
      name: p,
      url: `https://github.com/kawamurakazushi/${p}`,
    };

    const nodeMeta: NodeInput = {
      children: [],
      id: createNodeId(`project/${p}`),
      internal: {
        content: JSON.stringify(data),
        contentDigest: createContentDigest(data),
        type: "project",
      },
      parent: null,
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

export const createPages = ({ graphql, actions }: CreatePagesArgs) => {
  const { createPage } = actions;
  return new Promise((resolve, _) => {
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
      const decode = guard(
        object({
          allMarkdownRemark: object({
            edges: array(
              object({ node: object({ fields: object({ slug: string }) }) })
            ),
          }),
          allProject: object({
            edges: array(
              object({
                node: object({
                  description: string,
                  name: string,
                  url: string,
                }),
              })
            ),
          }),
        })
      );
      const data = decode(result.data);

      data.allMarkdownRemark.edges.forEach(({ node }) => {
        createPage({
          component: path.resolve(`./src/templates/blog.tsx`),
          context: {
            slug: node.fields.slug,
          },
          path: node.fields.slug,
        });
      });

      data.allProject.edges.forEach(({ node }) => {
        createPage({
          component: path.resolve(`./src/templates/project.tsx`),
          context: {
            // id: node.id,
          },
          path: node.name,
        });
      });

      resolve();
    });
  });
};
