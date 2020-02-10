import { guard, nullable, object, string } from "decoders";
import { graphql, ReplaceComponentRendererArgs } from "gatsby";
import React, { memo } from "react";
import { Helmet } from "react-helmet";

import Layout from "../components/layout";
import { GithubIcon } from "../icons/github";
import { LinkIcon } from "../icons/link";

const decoder = object({
  project: object({
    description: string,
    homepageUrl: nullable(string),
    name: string,
    readme: object({
      childMarkdownRemark: object({
        html: string,
      }),
    }),
    url: string,
  }),
});

export default memo(({ data }: ReplaceComponentRendererArgs) => {
  const project = guard(decoder)(data).project;
  return (
    <Layout
      breadcrumbs={[
        {
          label: "Projects",
          to: "/projects",
        },
        {
          label: project.name,
          to: `/projects/${project.name}`,
        },
      ]}
    >
      <Helmet>
        <title>{project.name} | Kazushi Kawamura</title>
        <meta property="og:title" content={project.name} />
        <meta property="og:description" content={project.description} />
      </Helmet>
      <div>
        <div className="font-light text-gray-400 flex text-xs mt-5 mb-2">
          {project.homepageUrl && project.homepageUrl !== "" && (
            <a
              target="_blank"
              rel="noopener"
              href={project.homepageUrl}
              className="mr-3 flex items-center hover:text-black"
            >
              <LinkIcon className="mr-1" size="18" />
              <span>Homepage</span>
            </a>
          )}
          <a
            target="_blank"
            rel="noopener"
            className="flex items-center hover:text-black"
            href={project.url}
          >
            <GithubIcon className="mr-1" size="18" />
            <span>View on Github</span>
          </a>
        </div>
        <div
          className="remark mb-4"
          dangerouslySetInnerHTML={{
            __html: project.readme.childMarkdownRemark.html,
          }}
        />
      </div>
    </Layout>
  );
});

export const query = graphql`
  query ProjectQuery($id: String!) {
    project(id: { eq: $id }) {
      id
      name
      description
      homepageUrl
      url
      languages {
        name
        color
      }
      url
      readme {
        id
        childMarkdownRemark {
          html
        }
      }
    }
  }
`;
