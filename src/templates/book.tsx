import { guard, object, string } from "decoders";
import { graphql, ReplaceComponentRendererArgs } from "gatsby";
import React, { memo } from "react";
import { Helmet } from "react-helmet";

import Layout from "../components/layout";

const decoder = object({
  markdownRemark: object({
    childBook: object({
      cover: string,
      isbn: string,
      title: string,
    }),
    html: string,
    id: string,
  }),
});

export default memo(({ data, pageContext }: ReplaceComponentRendererArgs) => {
  const book = guard(decoder)(data);

  return (
    <Layout
      breadcrumbs={[
        {
          label: book.markdownRemark.childBook.title,
          to: `/books/${book.markdownRemark.childBook.isbn}`,
        },
      ]}
    >
      <Helmet>
        <title>{book.markdownRemark.childBook.title} | Kazushi Kawamura</title>
        <meta
          property="og:title"
          content={book.markdownRemark.childBook.title}
        />
      </Helmet>
      <h1 className="heading my-2">{book.markdownRemark.childBook.title}</h1>
      <div
        className="remark mb-16"
        dangerouslySetInnerHTML={{ __html: book.markdownRemark.html }}
      />
    </Layout>
  );
});

export const query = graphql`
  query BookQuery($isbn: Float!) {
    markdownRemark(frontmatter: { isbn: { eq: $isbn } }) {
      id
      childBook {
        isbn
        title
        cover
      }
      html
    }
  }
`;
