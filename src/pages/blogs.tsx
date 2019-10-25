import { array, guard, object, string } from "decoders";
import { graphql, ReplaceComponentRendererArgs } from "gatsby";
import React, { memo } from "react";
import { Helmet } from "react-helmet";

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
            year: string,
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
  const blogsByYear = blogs.allMarkdownRemark.edges.reduce<BlogByYear>(
    (acc, cur) => {
      const year = cur.node.frontmatter.year;
      const accByYear = acc[year];

      const node = cur.node;
      const b = {
        date: node.frontmatter.date,
        slug: node.fields.slug,
        tags: node.frontmatter.tags,
        title: node.frontmatter.title,
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
    <Layout>
      <Helmet>
        <title>Blogs | Kazushi Kawamura</title>
        <meta property="og:title" content="Blogs" />
      </Helmet>
      <h2 className="font-bold mb-4 heading">Writing</h2>
      <div className="flex flex-col">
        {Object.keys(blogsByYear)
          .reverse()
          .map(year => {
            return (
              <div>
                <div className="flex items-center">
                  <h3 className="font-medium my-4 mr-2">{year}</h3>
                  <div className="flex-1 h-px bg-gray-100" />
                </div>
                {blogsByYear[year].map(blog => (
                  <ArticleItem
                    type="simple"
                    key={blog.slug}
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
            date(formatString: "MMM. DD")
            year: date(formatString: "YYYY")
            tags
          }
          excerpt(format: PLAIN)
        }
      }
    }
  }
`;
