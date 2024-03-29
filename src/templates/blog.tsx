import { guard, map, nullable, object, string } from "decoders";
import { graphql, ReplaceComponentRendererArgs } from "gatsby";
import React, { memo } from "react";
import { Helmet } from "react-helmet";

import ArticleItem from "../components/articleItem";
import Author from "../components/author";
import Layout from "../components/layout";

const decoder = map(
  object({
    nextPost: nullable(
      object({
        excerpt: string,
        fields: object({
          slug: string,
        }),
        frontmatter: object({
          date: string,
          title: string,
        }),
      })
    ),
    post: object({
      excerpt: string,
      fields: object({
        slug: string,
      }),
      frontmatter: object({
        date: string,
        title: string,
      }),
      html: string,
    }),
    prevPost: nullable(
      object({
        excerpt: string,
        fields: object({
          slug: string,
        }),
        frontmatter: object({
          date: string,
          title: string,
        }),
      })
    ),
  }),
  ({ post, prevPost, nextPost }) => {
    return {
      nextPost: nextPost
        ? {
            date: nextPost.frontmatter.date,
            excerpt: nextPost.excerpt,
            slug: nextPost.fields.slug,
            title: nextPost.frontmatter.title,
          }
        : null,
      post: {
        date: post.frontmatter.date,
        excerpt: post.excerpt,
        html: post.html,
        slug: post.fields.slug,
        title: post.frontmatter.title,
      },
      prevPost: prevPost
        ? {
            date: prevPost.frontmatter.date,
            excerpt: prevPost.excerpt,
            slug: prevPost.fields.slug,
            title: prevPost.frontmatter.title,
          }
        : null,
    };
  }
);

export default memo(({ data }: ReplaceComponentRendererArgs) => {
  const { post, prevPost, nextPost } = guard(decoder)(data);

  return (
    <Layout
      breadcrumbs={[
        { label: "Blogs", to: "/blogs" },
        { label: post.title, to: `/blogs/${post.slug}` },
      ]}
    >
      <Helmet>
        <title>{post.title} | Kazushi Kawamura</title>
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.excerpt} />
      </Helmet>
      <div className="flex flex-col mt-5 mb-4">
        <p className="text-sm text-gray-500 ">{post.date}</p>
        <h1 className="mt-16 mb-12 text-2xl" style={{fontWeight: 600}}>{post.title}</h1>
        <div
          className="mb-16 overflow-hidden remark"
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
        <hr />
        <div className="my-8 text-sm">
          My blog is hosted on{" "}
          <a
            className="underline"
            href="https://github.com/kawamurakazushi/.com/discussions"
          >
            Github
          </a>
          . If you'd like to leave a comment, report a problem, or contact me,
          then that's a fine place to do so.
        </div>
        <Author />
        <div className="my-8">
          <h3 className="mt-1 mb-4 font-bold">You Might also like...</h3>
          <div>
            {prevPost && (
              <ArticleItem
                to={prevPost.slug}
                date={prevPost.date}
                excerpt={prevPost.excerpt}
                title={prevPost.title}
              />
            )}
          </div>
          <div>
            {nextPost && (
              <ArticleItem
                to={nextPost.slug}
                date={nextPost.date}
                excerpt={nextPost.excerpt}
                title={nextPost.title}
              />
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
});

export const query = graphql`
  query BlogPostQuery($slug: String!, $prevSlug: String, $nextSlug: String) {
    post: markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      excerpt(format: PLAIN)
      fields {
        slug
      }
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
    }
    prevPost: markdownRemark(fields: { slug: { eq: $prevSlug } }) {
      excerpt(format: PLAIN)
      fields {
        slug
      }
      frontmatter {
        title
        date(formatString: "YYYY.MM.DD")
      }
    }
    nextPost: markdownRemark(fields: { slug: { eq: $nextSlug } }) {
      excerpt(format: PLAIN)
      fields {
        slug
      }
      frontmatter {
        title
        date(formatString: "YYYY.MM.DD")
      }
    }
  }
`;
