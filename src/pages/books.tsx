import { array, guard, object, string, nullable, boolean } from "decoders";
import { graphql, ReplaceComponentRendererArgs } from "gatsby";
import React, { memo } from "react";
import { Helmet } from "react-helmet";
import { Bar } from "react-chartjs-2";

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

  const count = books.allBook.edges.reduce<{
    [date: string]: { audible: number; kindle: number };
  }>((acc, cur) => {
    const f = cur.node.childMarkdownRemark.frontmatter;
    if (f.date) {
      const isAudible = f.audible ? f.audible : false;
      if (acc[f.date]) {
        return {
          ...acc,
          [f.date]: {
            audible: acc[f.date].audible + (isAudible ? 1 : 0),
            kindle: acc[f.date].kindle + (isAudible ? 0 : 1),
          },
        };
      }

      return {
        ...acc,
        [f.date]: {
          audible: isAudible ? 1 : 0,
          kindle: isAudible ? 0 : 1,
        },
      };
    }

    return acc;
  }, {});

  const d = Object.keys(count)
    .reverse()
    .reduce(
      (acc, cur) => {
        return {
          labels: [...acc.labels, cur],
          datasets: [
            {
              ...acc.datasets[0],
              data: [...acc.datasets[0].data, count[cur].kindle],
            },
            {
              ...acc.datasets[1],
              data: [...acc.datasets[1].data, count[cur].audible],
            },
          ],
        };
      },
      {
        labels: [],
        datasets: [
          {
            label: "Kindle / Paper Book",
            backgroundColor: "#e74c3c",
            borderColor: "#e74c3c",
            borderWidth: 1,
            hoverBackgroundColor: "#e74c3caa",
            hoverBorderColor: "#e74c3c44",
            data: [],
          },
          {
            label: "Audible",
            backgroundColor: "#f39c12",
            borderColor: "#f39c12",
            borderWidth: 1,
            hoverBackgroundColor: "#f39c12aa",
            hoverBorderColor: "#f39c1244",
            data: [],
          },
        ],
      }
    );

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
      <Bar
        data={d}
        type="horizontalBar"
        options={{
          scales: {
            xAxes: [{ stacked: true }],
            yAxes: [{ stacked: true, ticks: { stepSize: 1 } }],
          },
        }}
      />
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
