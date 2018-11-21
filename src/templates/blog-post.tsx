import { graphql } from "gatsby";
import * as React from "react";
import { memo } from "react";
import remark from "remark";
import reactRenderer from "remark-react";
import Highlight from "react-highlight";

import Layout from "../components/layout";

interface remarkProps {
  children: React.ReactNode;
}

const Paragraph = ({ children }: remarkProps) => {
  return <p className="my-2 leading-loose">{children}</p>;
};

const H2 = ({ children }: remarkProps) => {
  return <h2 className="my-2">{children}</h2>;
};

const H3 = ({ children }: remarkProps) => {
  return <h3 className="my-2">{children}</h3>;
};

const List = ({ children }: remarkProps) => {
  return <ul className="my-2 leading-normal">{children}</ul>;
};

const processor = remark().use(reactRenderer, {
  sanitize: true,
  prefix: "md-",
  remarkReactComponents: {
    code: Highlight,
    p: Paragraph,
    h2: H2,
    h3: H3,
    ul: List,
  },
});

interface Props {
  data: {
    markdownRemark: {
      frontmatter: {
        title: string;
        date: string;
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
