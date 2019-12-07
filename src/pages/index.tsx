import { array, guard, object, string, nullable } from "decoders";
import { graphql, Link, useStaticQuery } from "gatsby";
import React, { memo } from "react";

import ArticleItem from "../components/articleItem";
import Layout from "../components/layout";
import ProjectItem from "../components/projectItem";
import { ArrowRightIcon } from "../icons/arrowRight";
import { GithubIcon } from "../icons/github";

const useIndexQuery = () => {
  const data = useStaticQuery(
    graphql`
      query IndexQuery {
        allBooksYaml {
          edges {
            node {
              readAt
              childBook {
                title
                authors
                imageLinks {
                  thumbnail
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
    allBooksYaml: object({
      edges: array(
        object({
          node: object({
            childBook: object({
              authors: array(string),
              imageLinks: object({ thumbnail: string }),
              title: string,
            }),
            readAt: nullable(string),
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
          I enjoy cooking curry 🍛 and also maintain an app called currylife, a
          online community for curry lovers.
        </div>
        <div className="flex mt-6">
          <MoreLink to="/me" label="VIEW MORE ABOUT ME" />
        </div>
      </div>
      <div className="mb-8">
        <h2 className={header}>Writings</h2>
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
        {data.allBooksYaml.edges.map(({ node }) => (
          <div className="flex mb-5">
            <div className="w-10">
              <img
                src={node.childBook.imageLinks.thumbnail.replace(
                  "http://",
                  "https://"
                )}
              />
            </div>
            <div className="flex flex-col ml-2 flex-1">
              <div className="flex text-sm">
                <div className="font-medium mr-2">{node.childBook.title}</div>
                <div className="font-thin">
                  {node.childBook.authors.join(", ")}
                </div>
              </div>
              <div className="text-xs mt-1">
                {node.readAt ? (
                  <div className="font-medium">read at {node.readAt}</div>
                ) : (
                  <div className="italic">reading...</div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
});
