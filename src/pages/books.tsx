import { array, guard, object, string, nullable, boolean } from "decoders";
import { graphql, ReplaceComponentRendererArgs } from "gatsby";
import React, { memo } from "react";
import { Helmet } from "react-helmet";

import BookItem from "../components/bookItem";
import Layout from "../components/layout";

const decoder = object({
  allBook: object({
    edges: array(
      object({
        node: object({
          childMarkdownRemark: object({
            childBook: object({
              author: string,
              cover: nullable(string),
              title: string,
            }),
            frontmatter: object({
              isbn: string,
              readAt: nullable(string),
              date: nullable(string),
              audible: nullable(boolean),
            }),
            html: string,
          }),
        }),
      })
    ),
  }),
});

export default memo(({ data }: ReplaceComponentRendererArgs) => {
  const books = guard(decoder)(data);

  return (
    <Layout breadcrumbs={[{ label: "Books", to: "/books" }]}>
      <Helmet>
        <title>Books | Kazushi Kawamura</title>
        <meta property="og:title" content="Blogs" />
      </Helmet>
      <h2 className="my-4 heading">Books</h2>
      <div className="mb-4 text-xs text-gray-500">
        読んだ、読んでいる本の一覧
      </div>
      <div className="mt-6">
        {books.allBook.edges.map(({ node }) => {
          const { childMarkdownRemark } = node;
          const { frontmatter, childBook, html } = childMarkdownRemark;
          return (
            <BookItem
              key={frontmatter.isbn}
              author={childBook.author}
              readAt={frontmatter.readAt}
              title={childBook.title}
              cover={childBook.cover}
              isbn={frontmatter.isbn}
              html={html}
              audible={frontmatter.audible ? frontmatter.audible : false}
            />
          );
        })}
      </div>
    </Layout>
  );
});

export const query = graphql`
  query BooksQuery {
    allBook: allFile(
      filter: {
        internal: { mediaType: { eq: "text/markdown" } }
        sourceInstanceName: { eq: "books" }
      }
      sort: { fields: childMarkdownRemark___frontmatter___readAt, order: DESC }
    ) {
      edges {
        node {
          childMarkdownRemark {
            html
            frontmatter {
              isbn
              readAt
              audible
              date: readAt(formatString: "YYYY-MM")
            }
            childBook {
              author
              cover
              title
            }
          }
        }
      }
    }
  }
`;
