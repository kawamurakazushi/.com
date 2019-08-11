import { guard, map, nullable, object, string } from "decoders";
import { graphql, ReplaceComponentRendererArgs } from "gatsby";
import React, { memo } from "react";

import Layout from "../components/layout";

const decoder = map(
  object({
    markdownRemark: object({
      frontmatter: object({
        date: string,
        thumbnail: nullable(
          object({
            childImageSharp: object({ sizes: object({ src: string }) }),
          })
        ),
        title: string,
      }),
      html: string,
    }),
  }),
  ({ markdownRemark }) => {
    // FIXME: decoders bug?
    const thumbnail = markdownRemark.frontmatter.thumbnail;
    return {
      date: markdownRemark.frontmatter.date,
      html: markdownRemark.html,
      thumbnail: thumbnail ? thumbnail.childImageSharp.sizes.src : null,
      title: markdownRemark.frontmatter.title,
    };
  }
);

export default memo(({ data }: ReplaceComponentRendererArgs) => {
  const post = guard(decoder)(data);
  return (
    <Layout>
      <div className="flex flex-col">
        <div className="mt-1 mb-4">
          <h1 className="font-bold text-xl mb-2 md:text-5xl">{post.title}</h1>
          <p className="text-gray-600 text-sm mb-2">{post.date}</p>
          {post.thumbnail && (
            <div>
              <img src={post.thumbnail} />
            </div>
          )}
          <div
            className="remark"
            dangerouslySetInnerHTML={{ __html: post.html }}
          />
        </div>
      </div>
    </Layout>
  );
});

export const query = graphql`
  query BlogPostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
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
