import React from 'react'
import Link from 'gatsby-link'
import styled from 'react-emotion'

const Article = styled('div')`
  display: flex;
`

const Thumbnail = styled('div')`
  flex: 1;
`

const Description = styled('div')`
  flex: 3;
  margin-left: 16px;
`

const Date = styled('div')`
  color: gray;
`

const IndexPage = ({ data }) => {
  return (
    <div>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <Link key={node.fields.slug} to={node.fields.slug}>
          <Article>
            <Thumbnail>
              <img src={node.frontmatter.thumbnail.childImageSharp.sizes.src} />
            </Thumbnail>
            <Description>
              <h2>{node.frontmatter.title}</h2>
              <Date>{node.frontmatter.date}</Date>
            </Description>
          </Article>
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
