import React from 'react'
import styled from 'react-emotion'
import rehypeReact from 'rehype-react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'

const H1 = styled('h1')``
const H2 = styled('h2')``
const P = styled('p')``

const renderAst = new rehypeReact({
  createElement: React.createElement,
  components: { h1: H1, h2: H2, p: P },
}).Compiler

export default ({ data }) => {
  const post = data.markdownRemark
  return (
    <Layout>
      <h1>{post.frontmatter.title}</h1>
      <p>{post.frontmatter.date}</p>
      <img
        alt="thumbnail"
        src={post.frontmatter.thumbnail.childImageSharp.sizes.src}
      />
      {renderAst(post.htmlAst)}
    </Layout>
  )
}

export const query = graphql`
  query BlogPostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      htmlAst
      frontmatter {
        title
        date(formatString: "YYYY.MM.DD")
        thumbnail {
          childImageSharp {
            sizes(maxWidth: 1200) {
              src
              srcSet
              sizes
            }
          }
        }
      }
    }
  }
`
