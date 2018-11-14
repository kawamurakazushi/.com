import * as React from 'react'
import { graphql } from 'gatsby'
import ReactMarkdown from 'react-markdown'

import Layout from '../components/layout'

export default ({ data }) => {
  const post = data.markdownRemark
  return (
    <Layout>
      <div className="flex flex-col">
        <div className="mt-1 mb-4">
          <h1 className="text-black text-xlg mb-2">{post.frontmatter.title}</h1>
          <div className="w-full h-px bg-grey-lighter my-2" />
          <p className="text-grey text-sm my-2">{post.frontmatter.date}</p>
          <div className="post">
            <ReactMarkdown source={post.rawMarkdownBody} />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query BlogPostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      rawMarkdownBody
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
