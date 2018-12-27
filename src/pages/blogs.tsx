import * as React from "react";
import { memo } from "react";
import { FaGithub } from "react-icons/fa";
import { graphql, Link } from "gatsby";

import Layout from "../components/layout";

const BlogsPage = memo(({ data }) => {
  return (
    <Layout>
      <h2 className="font-thin my-4">BLOG</h2>
      <div className="flex flex-col">
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <>
            <Link
              key={node.fields.slug}
              className="flex border-b border-grey-lighter py-4"
              to={node.fields.slug}
            >
              <div className="flex-1">
                <div className="mt-2 text-sm text-grey">
                  {node.frontmatter.date}
                </div>
                <div className="my-3">{node.frontmatter.title}</div>
                <div className="my-3">
                  {node.frontmatter.tags.map(tag => (
                    <span className="py-1 px-2 mr-2 rounded bg-grey-darker text-white text-xs">
                      {`#${tag}`}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          </>
        ))}
      </div>
    </Layout>
  );
});

export default BlogsPage;

export const query = graphql`
  query BlogsQuery {
    allMarkdownRemark(sort: { order: DESC, fields: frontmatter___date }) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            date(formatString: "YYYY.MM.DD")
            tags
            category
            thumbnail {
              childImageSharp {
                sizes(maxWidth: 600) {
                  src
                }
              }
            }
          }
          excerpt
        }
      }
    }
  }
`;
