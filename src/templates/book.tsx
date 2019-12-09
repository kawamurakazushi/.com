import { array, guard, map, object, string, number } from "decoders";
import { graphql, ReplaceComponentRendererArgs } from "gatsby";
import React, { memo } from "react";
import { Helmet } from "react-helmet";

import ArticleItem from "../components/articleItem";
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

const pageContextDecoder = object({ isbn: number });

export default memo(({ data, pageContext }: ReplaceComponentRendererArgs) => {
  // const isbn = guard(pageContextDecoder)(pageContext).isbn;
  const book = guard(decoder)(data);

  return (
    <Layout>
      <Helmet>
        <title>{book.markdownRemark.childBook.title} | Kazushi Kawamura</title>
        <meta
          property="og:title"
          content={book.markdownRemark.childBook.title}
        />
      </Helmet>
      <h2 className="font-bold text-xl mb-2 md:text-5xl">
        {book.markdownRemark.childBook.title}
      </h2>
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
