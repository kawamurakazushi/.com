import ApolloClient from "apollo-boost";
import { array, guard, object, string } from "decoders";
import {
  CreateNodeArgs,
  CreatePagesArgs,
  NodeInput,
  SourceNodesArgs,
} from "gatsby";
import { createFilePath } from "gatsby-source-filesystem";
import fetch from "node-fetch";
import gql from "graphql-tag";
import * as path from "path";

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
  require("dotenv").config();
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
    const client = new ApolloClient({
      fetch,
      headers: {
        Authorization: `Bearer ${process.env.GITHUB_API_KEY}`,
      },
      uri: "https://api.github.com/graphql",
    });

    const d = await client.query({
      query: gql`
        query Repository($name: String!) {
          repository(owner: "kawamurakazushi", name: $name) {
            name
            description
            url
            object(expression: "master:README.md") {
              ... on Blob {
                text
              }
            }
            languages(first: 5) {
              edges {
                node {
                  name
                  color
                }
              }
            }
          }
        }
      `,
      variables: { name: p },
    });

    const decode = guard(
      object({
        repository: object({
          description: string,
          languages: object({
            edges: array(
              object({ node: object({ name: string, color: string }) })
            ),
          }),
          name: string,
          object: object({ text: string }),
          url: string,
        }),
      })
    );

    const data = decode(d.data);

    const nodeData = {
      description: data.repository.description,
      languages: data.repository.languages.edges.map(({ node }) => node),
      name: data.repository.name,
      readme: data.repository.object.text,
      url: data.repository.url,
    };

    const nodeMeta: NodeInput = {
      children: [],
      id: createNodeId(`project/${p}`),
      internal: {
        content: JSON.stringify(nodeData),
        contentDigest: createContentDigest(nodeData),
        type: "project",
      },
      parent: null,
    };
    return { ...nodeData, ...nodeMeta };
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
              id
              name
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
                  id: string,
                  name: string,
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
            id: node.id,
          },
          path: node.name,
        });
      });

      resolve();
    });
  });
};
