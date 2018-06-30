import React from 'react'
import Link from 'gatsby-link'

const IndexPage = ({ data }) => {
  console.log(data)
  return (
    <div>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <Link key={node.fields.slug} to={node.fields.slug}>
          <div style={{ display: 'flex' }}>
            <div style={{ flex: 1 }}>
              <img src={node.frontmatter.thumbnail.childImageSharp.sizes.src} />
            </div>
            <div style={{ flex: 3, marginLeft: 16 }}>
              <h2>{node.frontmatter.title}</h2>
              <p style={{ color: 'gray' }}>{node.frontmatter.date}</p>
            </div>
          </div>
        </Link>
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
