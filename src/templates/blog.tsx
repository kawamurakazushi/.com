import { guard, map, nullable, object, string } from "decoders";
import { graphql, ReplaceComponentRendererArgs } from "gatsby";
import React, { memo } from "react";
import { Helmet } from "react-helmet";

import Layout from "../components/layout";
import { ArrowLeftIcon } from "../icons/arrowLeft";
import { ArrowRightIcon } from "../icons/arrowRight";

const decoder = map(
  object({
    markdownRemark: object({
      excerpt: string,
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
    const thumbnail = markdownRemark.frontmatter.thumbnail;
    return {
      date: markdownRemark.frontmatter.date,
      excerpt: markdownRemark.excerpt,
      html: markdownRemark.html,
      thumbnail: thumbnail ? thumbnail.childImageSharp.sizes.src : null,
      title: markdownRemark.frontmatter.title,
    };
  }
);

const contextDecoder = object({
  next: nullable(string),
  prev: nullable(string),
});

export default memo(({ data, pageContext }: ReplaceComponentRendererArgs) => {
  const post = guard(decoder)(data);
  const context = guard(contextDecoder)(pageContext);
  return (
    <Layout>
      <Helmet>
        <title>{post.title} | Kazushi Kawamura</title>
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.excerpt} />
      </Helmet>
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
          <div className="flex justify-between mt-8">
            <div>
              {context.prev && (
                <a
                  className="flex items-center text-sm hover:bg-black hover:text-white"
                  href={context.prev}
                >
                  <ArrowLeftIcon size="18" />
                  Previous Article
                </a>
              )}
            </div>
            <div>
              {context.next && (
                <a
                  className="flex items-center text-sm hover:bg-black hover:text-white"
                  href={context.next}
                >
                  Next Article
                  <ArrowRightIcon size="18" />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
});

export const query = graphql`
  query BlogPostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      excerpt(format: PLAIN)
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
