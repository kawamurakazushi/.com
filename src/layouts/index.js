import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import styled from 'react-emotion'

import favicon from '../../assets/images/favicon.ico'
import Header from '../components/header'
import Footer from '../components/footer'
import './index.css'

const Body = styled('div')`
  margin: 0 auto;
  max-width: 960px;
  padding: 9px 1.0875rem 1.45rem;
  padding-top: 0;
`

const Layout = ({ children, data }) => (
  <div>
    <Helmet>
      <meta charSet="utf-8" />
      <title>{data.site.siteMetadata.title}</title>
      <link rel="shortcut icon" href={favicon} />
    </Helmet>
    <Header siteTitle={data.site.siteMetadata.title} />
    <Body>{children()}</Body>
    <Footer />
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
