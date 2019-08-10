import { graphql, StaticQuery } from "gatsby";
import React, { memo } from "react";
import Helmet from "react-helmet";

import Footer from "../components/footer";
import Header from "../components/header";

import "highlight.js/styles/monokai-sublime.css";
import icon from "../../assets/images/apple-touch-icon-180x180.png";
import favicon from "../../assets/images/favicon.ico";
import appleIcon from "../../assets/images/icon-192x192.png";
import "../tailwind.css";

interface Props {
  children: React.ReactNode;
}

const Layout = memo(({ children }: Props) => (
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
            <link rel="apple-touch-icon" type="image/png" href={appleIcon} />
            <link rel="icon" type="image/png" href={icon} />
          </Helmet>
          <div className="flex flex-col min-h-screen mx-auto max-w-main">
            <Header />
            <div className="flex-1">
              <div className="flex justify-center px-8 flex-1">
                <div className="w-full">{children}</div>
              </div>
            </div>
          </div>
          <Footer />
        </>
      )}
    />
  </div>
));

export default Layout;
