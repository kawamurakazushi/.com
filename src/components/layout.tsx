import { graphql, StaticQuery } from "gatsby";
import React, { memo } from "react";
import Helmet from "react-helmet";

import favicon from "../../assets/images/favicon.ico";
import Footer from "../components/footer";
import Header from "../components/header";

// import "highlight.js/styles/github.css";
import "highlight.js/styles/monokai-sublime.css";
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
          </Helmet>
          <div className="flex flex-col min-h-screen md:w-2/3 mx-auto">
            <Header />
            <div className="flex-1">
              <div className="flex justify-center p-4 flex-1">
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
