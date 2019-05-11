import { graphql, Link } from "gatsby";
import React, { memo } from "react";
import { FaGithub } from "react-icons/fa";

import ArticleItem from "../components/articleItem";
import Layout from "../components/layout";

import seoEditor from "../../assets/images/seo-editor.png";
import sketch2trello from "../../assets/images/sketch2trello.png";
import spiceBlending from "../../assets/images/spice-blending-puzzle.png";

const IndexPage = memo(({ data }) => {
  return (
    <Layout>
      <h2 className="font-thin my-4">BLOG</h2>
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
        <Link
          to="/blogs"
          className="my-5 w-full text-center p-4 border-green-dark border-solid border-2 text-green-dark"
        >
          SEE MORE
        </Link>
      </div>
      <h2 className="font-thin my-4">CURRIES</h2>
      <p>Coming Soon</p>
      <h2 className="font-thin my-4">PROJECTS</h2>
      <div className="flex mt-3">
        <div className="w-1/3">
          <img className="shadow" alt="seo editor" src={spiceBlending} />
        </div>
        <div className="ml-4">
          <div className="text-2xl text-black">Spice Blending Puzzle</div>
          <div className="text-sm mt-3 text-grey-darkest">
            An Application to blend you favorite spice with ease.
          </div>
          <div className="mt-2 flex items-center">
            <span className="text-xs bg-purple py-1 px-2 text-white rounded-sm">
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
        <div className="w-1/3">
          <img className="shadow" alt="seo editor" src={seoEditor} />
        </div>
        <div className="ml-4">
          <div className="text-2xl text-black">SEO Editor</div>
          <div className="text-sm mt-3 text-grey-darkest">
            An Editor to write articles.
          </div>
          <div className="mt-2 flex items-center">
            <span className="text-xs bg-purple py-1 px-2 text-white rounded-sm">
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
        <div className="w-1/3">
          <img className="shadow" alt="sketch2trello" src={sketch2trello} />
        </div>
        <div className="ml-4">
          <div className="text-2xl text-black">Sketch2Trello</div>
          <div className="text-sm mt-3 text-grey-darkest">
            Exports Sketch Artboards to Trello.
          </div>
          <div className="mt-2 flex items-center">
            <span className="text-xs bg-pink py-1 px-2 text-white rounded-sm">
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
