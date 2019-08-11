import { guard, object, string } from "decoders";
import { graphql, ReplaceComponentRendererArgs } from "gatsby";
import React, { memo } from "react";

import Layout from "../components/layout";
import { GithubIcon } from "../icons/github";
import { LinkIcon } from "../icons/link";

const decoder = object({
  project: object({
    homepageUrl: string,
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
    <Layout>
      <div>
        <div className="font-light text-gray-400 flex text-xs mb-2">
          <a
            href={project.homepageUrl}
            className="mr-3 flex items-center hover:text-black"
          >
            <LinkIcon className="mr-1" size="18" />
            <span>Homepage</span>
          </a>
          <a className="flex items-center hover:text-black" href={project.url}>
            <GithubIcon className="mr-1" size="18" />
            <span>View on Github</span>
          </a>
        </div>
        <div
          className="remark"
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
