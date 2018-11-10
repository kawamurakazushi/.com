import * as React from 'react'
import Link from 'gatsby-link'
import styled from 'react-emotion'
import { FaGithub } from 'react-icons/fa'
import { graphql } from 'gatsby'

import Layout from '../components/layout'

import seoEditor from '../../assets/images/seo-editor.png'
import sketch2trello from '../../assets/images/sketch2trello.png'

const ArticleList = styled('div')`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`

const Article = styled('div')`
  display: flex;
  flex-direction: column;
  width: 300px;
  margin-bottom: 16px;
`

const Thumbnail = styled('div')`
  flex: 1;
`

const Description = styled('div')`
  flex: 3;
`

const Img = styled('img')`
  margin-bottom: 0;
`

const Title = styled('h2')`
  font-size: 18px;
  margin: 8px 0;
`

const Date = styled('div')`
  color: gray;
  margin: 0;
  font-size: 14px;
`

const Headline = styled('h1')`
  margin: 24px 0;
  font-weight: 200;
`

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <Headline>BLOG</Headline>
      <ArticleList>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <Link key={node.fields.slug} to={node.fields.slug}>
            <Article>
              <Thumbnail>
                <Img
                  src={node.frontmatter.thumbnail.childImageSharp.sizes.src}
                />
              </Thumbnail>
              <Description>
                <Title>{node.frontmatter.title}</Title>
                <Date>{node.frontmatter.date}</Date>
              </Description>
            </Article>
          </Link>
        ))}
      </ArticleList>
      <Headline>CURRIES</Headline>
      <p>Coming Soon</p>
      <Headline>PROJECTS</Headline>
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
