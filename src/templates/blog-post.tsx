import { graphql } from "gatsby";
import * as React from "react";
import { memo } from "react";
import remark from "remark";
import reactRenderer from "remark-react";
import Highlight from "react-highlight";

import Layout from "../components/layout";
import { Link } from "@reach/router";

interface remarkProps {
  href?: string;
  children: React.ReactNode;
}

const Paragraph = ({ children }: remarkProps) => (
  <p className="my-4 leading-normal">{children}</p>
);

const H2 = ({ children }: remarkProps) => <h2 className="my-2">{children}</h2>;

const H3 = ({ children }: remarkProps) => <h3 className="my-2">{children}</h3>;

const List = ({ children }: remarkProps) => (
  <ul className="my-2 leading-normal">{children}</ul>
);

const Quote = ({ children }: remarkProps) => (
  <div className="my-2 pl-4 border-l-4 border-grey border-solid">
    {children}
  </div>
);

const Code = props => (
  <div className="my-2">
    <Highlight {...props} />
  </div>
);

const ExternalLink = ({ href, children }: remarkProps) => {
  return (
    <a
      href={href}
      rel="noopener noreferrer"
      target="_blank"
      className="my-2 leading-loose underline"
    >
      {children}
    </a>
  );
};

const processor = remark().use(reactRenderer, {
  sanitize: true,
  prefix: "md-",
  remarkReactComponents: {
    code: Code,
    p: Paragraph,
    h2: H2,
    h3: H3,
    ul: List,
    blockquote: Quote,
    a: ExternalLink,
  },
});

interface Props {
  data: {
    markdownRemark: {
      frontmatter: {
        title: string;
        date: string;
        thumbnail: {
          childImageSharp: {
            sizes: {
              src: string;
            };
          };
        } | null;
      };
      rawMarkdownBody: string;
    };
  };
}

export default memo(({ data }: Props) => {
  const post = data.markdownRemark;
  return (
    <Layout>
      <div className="flex flex-col">
        <div className="mt-1 mb-4">
          <h1 className="text-black text-xlg mb-2">{post.frontmatter.title}</h1>
          <div className="w-full h-px bg-grey-lighter my-2" />
          <p className="text-grey text-sm my-2">{post.frontmatter.date}</p>
          {post.frontmatter.thumbnail && (
            <div>
              <img src={post.frontmatter.thumbnail.childImageSharp.sizes.src} />
            </div>
          )}
          <div className="post">
            {
              processor.processSync(post.rawMarkdownBody, {
                gfm: true,
                breaks: true,
                yaml: false,
              }).contents
            }
          </div>
        </div>
      </div>
    </Layout>
  );
});

export const query = graphql`
  query BlogPostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      rawMarkdownBody
      frontmatter {
        title
        date(formatString: "YYYY.MM.DD")
        thumbnail {
          childImageSharp {
            sizes(maxWidth: 1200) {
              src
              srcSet
              sizes
            }
          }
        }
      }
    }
  }
`;
