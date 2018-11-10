import * as React from 'react'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import favicon from '../../assets/images/favicon.ico'
import Header from '../components/header'
import Footer from '../components/footer'

import '../tailwind.css'

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
          <div className="flex justify-center py-4">
            <div className="w-4/5">{children}</div>
          </div>
          <Footer />
        </>
      )}
    />
  </div>
)

export default Layout
