import { array, guard, object, string } from "decoders";
import { graphql, Link, useStaticQuery } from "gatsby";
import React, { memo } from "react";

import ArticleItem from "../components/articleItem";
import Layout from "../components/layout";
import ProjectItem from "../components/projectItem";
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
        allGoodreadsReview {
          edges {
            node {
              body
              readAt: read_at
              book {
                title
                isbn
                imageUrl: image_url
                authors {
                  name
                }
              }
            }
          }
        }
        allProject(limit: 5) {
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
          limit: 5
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
    allGoodreadsReview: object({
      edges: array(
        object({
          node: object({
            body: string,
            book: object({
              authors: array(object({ name: string })),
              imageUrl: string,
              isbn: string,
              title: string,
            }),
            readAt: string,
          }),
        })
      ),
    }),
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

const MoreLink = ({ to, label }: { to: string; label: string }) => {
  return (
    <Link
      to={to}
      className="text-xs font-normal flex items-center hover:text-white hover:bg-black"
    >
      {label}
      <ArrowRightIcon size="16" />
    </Link>
  );
};

export default memo(() => {
  const data = useIndexQuery();

  return (
    <Layout>
      <div className="mb-8">
        <h2 className="heading my-2">Writings</h2>
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
        </div>
        <div className="flex mt-2">
          <MoreLink to="/blogs" label="VIEW MORE WRITINGS" />
        </div>
      </div>
      <div className="mb-4">
        <h2 className="heading my-2">Projects</h2>
        {data.allProject.edges.map(({ node }) => (
          <ProjectItem
            key={node.id}
            name={node.name}
            to={node.name}
            description={node.description}
            topics={node.topics}
            url={node.url}
          />
        ))}
        <div className="flex mt-2">
          <MoreLink to="/projects" label="VIEW MORE PROJECTS" />
        </div>
      </div>
      <div className="mb-4">
        <h2 className="heading my-2">Book Reviews</h2>
        {data.allGoodreadsReview.edges.map(({ node }) => (
          <div className="flex mb-3">
            <div className="w-10">
              <img src={node.book.imageUrl} />
            </div>
            <div className="flex flex-col ml-2 flex-1">
              <div className="flex text-sm">
                <div className="font-medium mr-2">{node.book.title}</div>
                <div className="font-thin">
                  {node.book.authors.map(({ name }) => name).join(", ")}
                </div>
              </div>
              <div className="text-xs mt-1">
                {node.readAt === "" ? (
                  <div className="italic">reading...</div>
                ) : (
                  <div className="font-medium">read!</div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
});
