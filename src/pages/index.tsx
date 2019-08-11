import { array, guard, object, string } from "decoders";
import { graphql, Link, useStaticQuery } from "gatsby";
import React, { memo } from "react";

import ArticleItem from "../components/articleItem";
import Layout from "../components/layout";

const useIndexQuery = () => {
  const data = useStaticQuery(
    graphql`
      query IndexQuery {
        allProject {
          edges {
            node {
              id
              name
              url
              description
              topics
            }
          }
        }
        allMarkdownRemark(
          sort: { order: DESC, fields: frontmatter___date }
          limit: 4
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
                category
              }
              excerpt(format: PLAIN)
            }
          }
        }
      }
    `
  );

  const decoder = object({
    allMarkdownRemark: object({
      edges: array(
        object({
          node: object({
            excerpt: string,
            fields: object({ slug: string }),
            frontmatter: object({
              category: string,
              date: string,
              tags: array(string),
              title: string,
            }),
          }),
        })
      ),
    }),
    allProject: object({
      edges: array(
        object({
          node: object({
            description: string,
            id: string,
            name: string,
            topics: array(string),
            url: string,
          }),
        })
      ),
    }),
  });

  return guard(decoder)(data);
};

export default memo(() => {
  const data = useIndexQuery();

  return (
    <Layout>
      <div className="flex flex-col">
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <ArticleItem
            key={node.fields.slug}
            to={node.fields.slug}
            date={node.frontmatter.date}
            tags={node.frontmatter.tags}
            title={node.frontmatter.title}
            excerpt={node.excerpt}
          />
        ))}
        <div className="my-5 flex justify-center">
          <Link
            to="/blogs"
            className="text-center px-2 border-green-900 border-solid border-b text-green-900"
          >
            MORE
          </Link>
        </div>
      </div>
      <h2 className="font-bold my-3">PROJECTS</h2>
      {data.allProject.edges.map(({ node }) => (
        <div key={node.id} className="mb-5">
          <Link
            to={`/projects/${node.name}`}
            className="text-l font-medium hover:bg-black hover:text-white"
          >
            {node.name}
          </Link>
          <div className="text-xs mt-2 mb-1">{node.description}</div>
          <div className="text-xs flex">
            {node.topics.map(topic => (
              <div key={topic} className="mr-1">
                #{topic}
              </div>
            ))}
          </div>
        </div>
      ))}
    </Layout>
  );
});
