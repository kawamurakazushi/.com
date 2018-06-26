import React from 'react'
import Link from 'gatsby-link'

const IndexPage = ({ data }) => {
  console.log(data)
  return (
    <div>
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <Link to="/page-2/">Go to page 2</Link>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <div key={node.fields.slug}>
          <p>{node.frontmatter.category}</p>
          <Link to={node.fields.slug}>{node.frontmatter.title}</Link>
        </div>
      ))}
    </div>
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
            date(formatString: "DD MMMM, YYYY")
            tags
            category
          }
          excerpt
        }
      }
    }
  }
`
