import { graphql } from "gatsby";
import React, { memo } from "react";

import Layout from "../components/layout";

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
      html: string;
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
          <div
            className="post"
            dangerouslySetInnerHTML={{ __html: post.html }}
          />

          {/* <div className="post">
            {
              processor.processSync(post.rawMarkdownBody, {
                breaks: true,
                gfm: true,
                yaml: false,
              }).contents
            }
          </div> */}
        </div>
      </div>
    </Layout>
  );
});

export const query = graphql`
  query BlogPostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
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
