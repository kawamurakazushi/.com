import React from 'react'
import Link from 'gatsby-link'
import styled from 'react-emotion'

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
  font-weight: 200;
`

const IndexPage = ({ data }) => {
  return (
    <div>
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
      <Headline>PROJECTS</Headline>
      <p>Coming soon...</p>
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
