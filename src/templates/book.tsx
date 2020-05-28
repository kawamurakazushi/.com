import { guard, object, string, nullable } from "decoders";
import { graphql, ReplaceComponentRendererArgs } from "gatsby";
import React, { memo } from "react";
import { Helmet } from "react-helmet";

import Layout from "../components/layout";

const decoder = object({
  markdownRemark: object({
    childBook: object({
      author: string,
      cover: nullable(string),
      isbn: string,
      title: string,
    }),
    frontmatter: object({
      readAt: nullable(string),
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
          label: "Books",
          to: `/books`,
        },
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
      <h1 className="heading mt-5 mb-4">
        {book.markdownRemark.childBook.title}
      </h1>
      <div className="flex my-5">
        <img
          className="max-w-20 items-start"
          src={book.markdownRemark.childBook.cover}
        />
        <div className="text-gray-500 text-sm m-4">
          <p className="">
            {book.markdownRemark.frontmatter.readAt
              ? `${book.markdownRemark.frontmatter.readAt} 読了`
              : "reading"}
          </p>
          <p className="italic">{book.markdownRemark.childBook.author}</p>
        </div>
      </div>
      <div
        className="remark mb-16"
        dangerouslySetInnerHTML={{ __html: book.markdownRemark.html }}
      />
    </Layout>
  );
});

export const query = graphql`
  query BookQuery($isbn: String!) {
    markdownRemark(frontmatter: { isbn: { eq: $isbn } }) {
      id
      childBook {
        author
        isbn
        title
        cover
      }
      frontmatter {
        readAt
      }
      html
    }
  }
`;
