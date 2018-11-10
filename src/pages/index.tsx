import * as React from 'react'
import { FaGithub } from 'react-icons/fa'
import { graphql, Link } from 'gatsby'

import Layout from '../components/layout'

import seoEditor from '../../assets/images/seo-editor.png'
import sketch2trello from '../../assets/images/sketch2trello.png'

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <h2 className="font-thin my-4">BLOG</h2>
      <div className="flex flex-wrap justify-between">
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <Link
            key={node.fields.slug}
            className="flex flex-col w-1/3 mb-3"
            to={node.fields.slug}
          >
            <div className="mx-1">
              <img
                className="flex flex-1"
                src={node.frontmatter.thumbnail.childImageSharp.sizes.src}
              />
              <div className="">
                <div className="my-3">{node.frontmatter.title}</div>
                <div className="text-sm text-grey">{node.frontmatter.date}</div>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <h2 className="font-thin my-4">CURRIES</h2>
      <p>Coming Soon</p>
      <h2 className="font-thin my-4">PROJECTS</h2>
      <div className="flex mt-3">
        <div className="w-1/3">
          <img alt="seo editor" src={seoEditor} />
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
          <img alt="sketch2trello" src={sketch2trello} />
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
  )
}

export default IndexPage

export const query = graphql`
  query IndexQuery {
    allMarkdownRemark {
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
`
