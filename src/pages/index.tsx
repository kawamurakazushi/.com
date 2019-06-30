import { graphql, Link } from "gatsby";
import React, { memo } from "react";
import { FaGithub } from "react-icons/fa";

import ArticleItem from "../components/articleItem";
import Layout from "../components/layout";

const IndexPage = memo(({ data }) => {
  return (
    <Layout>
      <h2 className="font-bold my-3">BLOG</h2>
      <div className="flex flex-col">
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <ArticleItem
            key={node.fields.slug}
            to={node.fields.slug}
            date={node.frontmatter.date}
            tags={node.frontmatter.tags}
            title={node.frontmatter.title}
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
      <h2 className="font-bold my-3">CURRIES</h2>
      <p>Coming Soon</p>
      <h2 className="font-bold my-3">PROJECTS</h2>
      <div className="flex mt-3">
        <div className="mb-3">
          <div className="text-xl text-black">Spice Blending Puzzle</div>
          <div className="text-sm mt-3 text-gray-900">
            An Application to blend you favorite spice with ease.
          </div>
          <div className="mt-2 flex items-center">
            <span className="text-xs bg-purple-600 py-1 px-2 text-white rounded">
              #elm
            </span>
            <a
              className="flex ml-2"
              href="https://github.com/kawamurakazushi/spice-blending-puzzle"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>
          </div>
        </div>
      </div>
      <div className="flex mt-3">
        <div className="mb-3">
          <div className="text-xl text-black">SEO Editor</div>
          <div className="text-sm mt-3 text-gray-900">
            An Editor to write articles.
          </div>
          <div className="mt-2 flex items-center">
            <span className="text-xs bg-purple-600 py-1 px-2 text-white rounded">
              #elm
            </span>
            <a
              className="flex ml-2"
              href="https://github.com/kawamurakazushi/seo-editor"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>
          </div>
        </div>
      </div>
      <div className="flex mt-3">
        <div className="mb-3">
          <div className="text-xl text-black">Sketch2Trello</div>
          <div className="text-sm mt-3 text-gray-900">
            Exports Sketch Artboards to Trello.
          </div>
          <div className="mt-2 flex items-center">
            <span className="text-xs bg-pink-600 py-1 px-2 text-white rounded">
              #cocoascript
            </span>
            <a
              className="flex ml-2"
              href="https://github.com/kawamurakazushi/sketch2trello"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
});

export default IndexPage;

export const query = graphql`
  query IndexQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: frontmatter___date }
      limit: 4
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
