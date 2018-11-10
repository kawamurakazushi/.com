import * as React from 'react'
import Helmet from 'react-helmet'
import styled from 'react-emotion'
import { StaticQuery, graphql } from 'gatsby'

import favicon from '../../assets/images/favicon.ico'
import Header from '../components/header'
import Footer from '../components/footer'

import '../tailwind.css'

const Body = styled('div')`
  margin: 0 auto;
  max-width: 960px;
  padding: 9px 1.0875rem 1.45rem;
  padding-top: 0;
`

const Layout = ({ children }: { children: React.ReactNode }) => (
  <div>
    <StaticQuery
      query={graphql`
        query LayoutQuery {
          site {
            siteMetadata {
              title
            }
          }
        }
      `}
      render={data => (
        <>
          <Helmet>
            <meta charSet="utf-8" />
            <title>{data.site.siteMetadata.title}</title>
            <link rel="shortcut icon" href={favicon} />
          </Helmet>
          <Header siteTitle={data.site.siteMetadata.title} />
          <Body>{children}</Body>
          <Footer />
        </>
      )}
    />
  </div>
)

export default Layout
