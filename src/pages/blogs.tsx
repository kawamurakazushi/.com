import { array, guard, object, string } from "decoders";
import { graphql, ReplaceComponentRendererArgs } from "gatsby";
import React, { memo } from "react";
import { Helmet } from "react-helmet";

import ArticleItem from "../components/articleItem";
import Layout from "../components/layout";

const decoder = object({
  allPost: object({
    edges: array(
      object({
        node: object({
          childMarkdownRemark: object({
            fields: object({ slug: string }),
            frontmatter: object({
              date: string,
              tags: array(string),
              title: string,
              year: string,
            }),
          }),
        }),
      })
    ),
  }),
});

interface BlogByYear {
  [year: string]: Array<{
    title: string;
    date: string;
    slug: string;
    tags: string[];
  }>;
}

export default memo(({ data }: ReplaceComponentRendererArgs) => {
  const blogs = guard(decoder)(data);
  const blogsByYear = blogs.allPost.edges.reduce<BlogByYear>(
    (acc, { node }) => {
      const { childMarkdownRemark } = node;
      const { frontmatter, fields } = childMarkdownRemark;
      const year = frontmatter.year;
      const accByYear = acc[year];

      const b = {
        date: frontmatter.date,
        slug: fields.slug,
        tags: frontmatter.tags,
        title: frontmatter.title,
      };

      if (accByYear) {
        return {
          ...acc,
          [year]: [...accByYear, b],
        };
      }

      return { ...acc, [year]: [b] };
    },
    {}
  );

  return (
    <Layout breadcrumbs={[{ label: "Blogs", to: "/blogs" }]}>
      <Helmet>
        <title>Blogs | Kazushi Kawamura</title>
        <meta property="og:title" content="Blogs" />
      </Helmet>
      <h2 className="mt-4 heading">Writings</h2>
      <div className="flex flex-col">
        {Object.keys(blogsByYear)
          .reverse()
          .map(year => {
            return (
              <div key={year}>
                <div className="flex items-center">
                  <h3 className="text-lg font-semibold my-5 mr-3">{year}</h3>
                  <div className="flex-1 h-px bg-gray-200" />
                </div>
                {blogsByYear[year].map(blog => (
                  <ArticleItem
                    key={blog.slug}
                    type="simple"
                    to={blog.slug}
                    title={blog.title}
                    date={blog.date}
                    tags={blog.tags}
                    excerpt=""
                  />
                ))}
              </div>
            );
          })}
      </div>
    </Layout>
  );
});

export const query = graphql`
  query BlogsQuery {
    allPost: allFile(
      filter: {
        internal: { mediaType: { eq: "text/markdown" } }
        sourceInstanceName: { eq: "posts" }
      }
      sort: { fields: childMarkdownRemark___frontmatter___date, order: DESC }
    ) {
      edges {
        node {
          childMarkdownRemark {
            excerpt(format: PLAIN)
            fields {
              slug
            }
            frontmatter {
              title
              date(formatString: "MMM. DD")
              year: date(formatString: "YYYY")
              tags
              category
            }
          }
        }
      }
    }
  }
`;
