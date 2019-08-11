import { array, guard, object, string } from "decoders";
import { graphql, ReplaceComponentRendererArgs } from "gatsby";
import React, { memo } from "react";

import ArticleItem from "../components/articleItem";
import Layout from "../components/layout";

const decoder = object({
  allMarkdownRemark: object({
    edges: array(
      object({
        node: object({
          fields: object({ slug: string }),
          frontmatter: object({
            date: string,
            tags: array(string),
            title: string,
          }),
        }),
      })
    ),
  }),
});

export default memo(({ data }: ReplaceComponentRendererArgs) => {
  const blogs = guard(decoder)(data);
  return (
    <Layout>
      <h2 className="font-thin my-4">BLOG</h2>
      <div className="flex flex-col">
        {blogs.allMarkdownRemark.edges.map(({ node }) => (
          <ArticleItem
            key={node.fields.slug}
            to={node.fields.slug}
            title={node.frontmatter.title}
            date={node.frontmatter.date}
            tags={node.frontmatter.tags}
            excerpt=""
          />
        ))}
      </div>
    </Layout>
  );
});

export const query = graphql`
  query BlogsQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: frontmatter___date }
      filter: { fields: { slug: { ne: null } } }
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            date(formatString: "YYYY.MM.DD")
            tags
          }
          excerpt(format: PLAIN)
        }
      }
    }
  }
`;
