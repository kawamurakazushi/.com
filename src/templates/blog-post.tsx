import * as React from 'react'
import { graphql } from 'gatsby'

import remark from 'remark'
import reactRenderer from 'remark-react'
import Highlight from 'react-highlight'

const Paragraph = ({ children }) => {
  return <p className="my-2 leading-loose">{children}</p>
}

const H2 = ({ children }) => {
  return <h2 className="my-2">{children}</h2>
}

const H3 = ({ children }) => {
  return <h3 className="my-2">{children}</h3>
}

const List = ({ children }) => {
  return <ul className="my-2 leading-normal">{children}</ul>
}
// .post ul {
//   margin: 16px 0;
// }

// .post pre {
//   margin: 16px 0;
// }

const processor = remark().use(reactRenderer, {
  sanitize: true,
  prefix: 'md-',
  remarkReactComponents: {
    // code: Code,
    code: Highlight,
    p: Paragraph,
    h2: H2,
    h3: H3,
    ul: List,
  },
})

import Layout from '../components/layout'

export default ({ data }) => {
  const post = data.markdownRemark
  // console.log(processor.process('# hello world'))
  return (
    <Layout>
      <div className="flex flex-col">
        <div className="mt-1 mb-4">
          <h1 className="text-black text-xlg mb-2">{post.frontmatter.title}</h1>
          <div className="w-full h-px bg-grey-lighter my-2" />
          <p className="text-grey text-sm my-2">{post.frontmatter.date}</p>
          <div className="post">
            {/* <ReactMarkdown source={post.rawMarkdownBody} /> */}
            {
              processor.processSync(post.rawMarkdownBody, {
                gfm: true,
                breaks: true,
                yaml: false,
              }).contents
            }
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
