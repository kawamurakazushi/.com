import { array, guard, map, object, string } from "decoders";
import { graphql, ReplaceComponentRendererArgs } from "gatsby";
import React, { memo } from "react";
import { Helmet } from "react-helmet";

import ArticleItem from "../components/articleItem";
import Layout from "../components/layout";

const decoder = map(
  object({
    allMarkdownRemark: object({
      edges: array(
        object({
          node: object({
            excerpt: string,
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
  }),
  ({ allMarkdownRemark }) => {
    return allMarkdownRemark.edges.map(({ node }) => ({
      excerpt: node.excerpt,
      ...node.fields,
      ...node.frontmatter,
    }));
  }
);

const pageContextDecoder = object({ tag: string });

export default memo(({ data, pageContext }: ReplaceComponentRendererArgs) => {
  const tag = guard(pageContextDecoder)(pageContext).tag;
  const posts = guard(decoder)(data);

  return (
    <Layout>
      <Helmet>
        <title>#{tag} | Kazushi Kawamura</title>
        <meta property="og:title" content={tag} />
      </Helmet>
      <h2 className="font-bold text-xl mb-2 md:text-5xl">#{tag}</h2>
      <div className="flex flex-col">
        {posts.map(post => (
          <ArticleItem
            key={post.slug}
            to={post.slug}
            title={post.title}
            date={post.date}
            tags={post.tags}
            excerpt={post.excerpt}
          />
        ))}
      </div>
    </Layout>
  );
});

export const query = graphql`
  query TagQuery($tag: String!) {
    allMarkdownRemark(
      sort: { order: DESC, fields: frontmatter___date }
      filter: { frontmatter: { tags: { in: [$tag] } } }
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
