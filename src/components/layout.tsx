import * as React from "react";
import { memo } from "react";
import Helmet from "react-helmet";
import { StaticQuery, graphql } from "gatsby";

import favicon from "../../assets/images/favicon.ico";
import Header from "../components/header";
import Footer from "../components/footer";

import "highlight.js/styles/github.css";
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
          <div className="flex flex-col min-h-screen">
            <Header siteTitle={data.site.siteMetadata.title} />
            <div className="flex justify-center p-4 flex-1">
              <div className="w-full md:w-2/3">{children}</div>
            </div>
            <Footer />
          </div>
        </>
      )}
    />
  </div>
));

export default Layout;
