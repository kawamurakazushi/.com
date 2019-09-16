import { array, guard, object, string } from "decoders";
import { graphql, Link, useStaticQuery } from "gatsby";
import React, { memo } from "react";

import ArticleItem from "../components/articleItem";
import Layout from "../components/layout";
import { ArrowRightIcon } from "../icons/arrowRight";

const useIndexQuery = () => {
  const data = useStaticQuery(
    graphql`
      query IndexQuery {
        galleries: allFile(
          filter: { sourceInstanceName: { eq: "galleries" } }
        ) {
          group(field: relativeDirectory) {
            fieldValue
          }
        }
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
    galleries: object({
      group: array(object({ fieldValue: string })),
    }),
  });

  return guard(decoder)(data);
};

export default memo(() => {
  const data = useIndexQuery();

  return (
    <Layout>
      <h2 className="heading my-2">Blog Post</h2>
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
        <div className="mt-1 mb-2 flex flex-row-reverse">
          <Link
            to="/blogs"
            // className="px-2 py-1 text-sm border-solid border hover:text-black hover:bg-white border-black bg-black text-white "
            className="text-xs flex items-center hover:text-white hover:bg-black"
          >
            SEE ALL BLOGS
            <ArrowRightIcon size="16" />
          </Link>
        </div>
      </div>
      <h2 className="heading my-2">Projects</h2>
      {data.allProject.edges.map(({ node }) => (
        <Link
          to={`/projects/${node.name}`}
          key={node.id}
          className="mb-5 block
          "
        >
          <span className="text-l font-medium hover:bg-black hover:text-white">
            {node.name}
          </span>
          <div className="text-xs mt-2 mb-1">{node.description}</div>
          <div className="text-xs flex">
            {node.topics.map(topic => (
              <div key={topic} className="mr-1">
                #{topic}
              </div>
            ))}
          </div>
        </Link>
      ))}
      <h2 className="heading my-2">Gallery</h2>
      <div className="flex">
        {data.galleries.group.map(({ fieldValue }) => {
          return (
            <Link
              className="flex flex-col justify-center items-center rounded md:w-1/3 w-full h-48"
              to={`/galleries/${fieldValue}`}
              style={{
                background:
                  "linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url('https://images.unsplash.com/photo-1472073707371-aed1a89bfcaa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80')",
              }}
            >
              <div className="text-white">{fieldValue}</div>
              <div className="h-px w-8 bg-white mt-2"></div>
            </Link>
          );
        })}
      </div>
    </Layout>
  );
});
