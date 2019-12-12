import { Link } from "gatsby";
import React, { FC } from "react";
import Helmet from "react-helmet";

import Footer from "../components/footer";
import Header from "../components/header";

import "highlight.js/styles/monokai-sublime.css";
import icon from "../../static/images/apple-touch-icon-180x180.png";
import favicon from "../../static/images/favicon.ico";
import appleIcon from "../../static/images/icon-192x192.png";
import "../tailwind.css";

interface Breadcrumb {
  label: string;
  to: string;
}

interface Props {
  breadcrumbs?: Breadcrumb[];
}

const Layout: FC<Props> = ({ children, breadcrumbs }) => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Kazushi Kawamura</title>
        <link rel="shortcut icon" href={favicon} />
        <link rel="apple-touch-icon" type="image/png" href={appleIcon} />
        <link rel="icon" type="image/png" href={icon} />
        <meta property="og:title" content="Kazushi Kawamura" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://kawamurakazushi.com" />
        <meta
          property="og:image"
          content="https://kawamurakazushi.com/images/og.png"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:description" content="Hi, I'm Kazushi Kawamura." />
      </Helmet>
      <div className="flex flex-col min-h-screen mx-auto max-w-main">
        <Header />
        <div className="flex-1">
          <div className="flex flex-col justify-center px-6 flex-1">
            {breadcrumbs && (
              <div className="flex items-center text-xs ">
                <Link className=" whitespace-no-wrap" to="/">
                  Top
                </Link>
                {breadcrumbs.map((b, i) => (
                  <div
                    className={`flex ${
                      i === breadcrumbs.length - 1
                        ? "truncate"
                        : "whitespace-no-wrap"
                    }`}
                  >
                    <div className="mx-1">/</div>
                    <Link to={b.to}>{b.label}</Link>
                  </div>
                ))}
              </div>
            )}
            <div className="w-full">{children}</div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Layout;
