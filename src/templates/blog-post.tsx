import { graphql } from "gatsby";
import React, { memo } from "react";
import Highlight from "react-highlight";
import remark from "remark";
import reactRenderer from "remark-react";

import Layout from "../components/layout";

interface RemarkProps {
  href?: string;
  children: React.ReactNode;
}

const Paragraph = ({ children }: RemarkProps) => (
  <p className="my-3 leading-normal">{children}</p>
);

const H2 = ({ children }: RemarkProps) => (
  <h2 className="my-6 font-normal">{children}</h2>
);

const H3 = ({ children }: RemarkProps) => <h3 className="my-6">{children}</h3>;

const List = ({ children }: RemarkProps) => (
  <ul className="my-3 leading-normal">{children}</ul>
);

const Quote = ({ children }: RemarkProps) => (
  <div className="my-3 pl-4 border-l-4 border-grey border-solid">
    {children}
  </div>
);

const Code = props => (
  <div className="my-3">
    <Highlight className="p-4 rounded leading-normal" {...props} />
  </div>
);

const Em = ({ children }: RemarkProps) => (
  <span className="px-1  rounded-sm text-sm bg-grey-lighter text-grey-darker">
    {children}
  </span>
);

const ExternalLink = ({ href, children }: RemarkProps) => {
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
  prefix: "md-",
  remarkReactComponents: {
    a: ExternalLink,
    blockquote: Quote,
    code: Code,
    em: Em,
    h2: H2,
    h3: H3,
    p: Paragraph,
    ul: List,
  },
  sanitize: true,
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
          <h1 className="text-black text-xlg my-5">{post.frontmatter.title}</h1>
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
                breaks: true,
                gfm: true,
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
