import { array, guard, nullable, object, string, number } from "decoders";
import { graphql, Link, useStaticQuery } from "gatsby";
import React, { memo } from "react";

import ArticleItem from "../components/articleItem";
import BookItem from "../components/bookItem";
import Layout from "../components/layout";
import ProjectItem from "../components/projectItem";
import { ArrowRightIcon } from "../icons/arrowRight";

const useIndexQuery = () => {
  const data = useStaticQuery(
    graphql`
      query IndexQuery {
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
        allPost: allFile(
          limit: 5
          filter: {
            internal: { mediaType: { eq: "text/markdown" } }
            sourceInstanceName: { eq: "posts" }
          }
          sort: {
            fields: childMarkdownRemark___frontmatter___date
            order: DESC
          }
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
                  date(formatString: "YYYY.MM.DD")
                  tags
                  category
                }
              }
            }
          }
        }
        allBook: allFile(
          limit: 5
          filter: {
            internal: { mediaType: { eq: "text/markdown" } }
            sourceInstanceName: { eq: "books" }
          }
          sort: {
            fields: childMarkdownRemark___frontmatter___readAt
            order: DESC
          }
        ) {
          edges {
            node {
              childMarkdownRemark {
                frontmatter {
                  isbn
                  readAt
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
    `
  );

  const decoder = object({
    allBook: object({
      edges: array(
        object({
          node: object({
            childMarkdownRemark: object({
              childBook: object({
                author: string,
                cover: string,
                title: string,
              }),
              frontmatter: object({
                isbn: number,
                readAt: nullable(string),
              }),
            }),
          }),
        })
      ),
    }),
    allPost: object({
      edges: array(
        object({
          node: object({
            childMarkdownRemark: object({
              excerpt: string,
              fields: object({ slug: string }),
              frontmatter: object({
                category: string,
                date: string,
                tags: array(string),
                title: string,
              }),
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

const header = "heading mt-10 mb-6";

export default memo(() => {
  const data = useIndexQuery();

  return (
    <Layout>
      <div className="text-sm mt-6 mb-12">
        <div className="mb-2">
          Hello! I’m a Software Engineer living in Tokyo.
        </div>
        <div>
          I enjoy cooking curry 🍛 and also maintain an app called{" "}
          <a className="underline" target="_blank" href="https://currylife.me">
            currylife
          </a>
          , a online community for curry lovers.
        </div>
        <div className="flex mt-6">
          <MoreLink to="/me" label="VIEW MORE ABOUT ME" />
        </div>
      </div>
      <div className="mb-8">
        <h2 className={header}>Writings</h2>
        <div className="flex flex-col">
          {data.allPost.edges.map(({ node }) => {
            const { fields, frontmatter, excerpt } = node.childMarkdownRemark;
            return (
              <ArticleItem
                key={fields.slug}
                to={fields.slug}
                date={frontmatter.date}
                tags={frontmatter.tags}
                title={frontmatter.title}
                excerpt={excerpt}
              />
            );
          })}
        </div>
        <div className="flex mt-2">
          <MoreLink to="/blogs" label="VIEW MORE WRITINGS" />
        </div>
      </div>
      <div className="mb-4">
        <h2 className={header}>Projects</h2>
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
      <div id="books" className="mb-4">
        <h2 className={header}>Books</h2>
        {data.allBook.edges.map(({ node }) => {
          const { childMarkdownRemark } = node;
          const { frontmatter, childBook } = childMarkdownRemark;
          return (
            <BookItem
              key={frontmatter.isbn}
              author={childBook.author}
              readAt={frontmatter.readAt}
              title={childBook.title}
              cover={childBook.cover}
              isbn={frontmatter.isbn}
            />
          );
        })}
        <div className="flex mt-2">
          <MoreLink to="/books" label="VIEW MORE BOOKS" />
        </div>
      </div>
    </Layout>
  );
});
