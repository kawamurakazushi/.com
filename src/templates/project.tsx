import { graphql, ReplaceComponentRendererArgs } from "gatsby";
import React, { memo } from "react";

import Layout from "../components/layout";
import { GithubIcon } from "../icons/github";
import { LinkIcon } from "../icons/link";

interface Props extends ReplaceComponentRendererArgs {
  data: {
    project: {
      url: string;
      homepageUrl: string;
      name: string;
      readme: {
        childMarkdownRemark: {
          html: string;
        };
      };
    };
  };
}

export default memo(({ data }: Props) => {
  return (
    <Layout>
      <div>
        <div className="font-light text-gray-400 flex text-xs mb-2">
          <a
            href={data.project.homepageUrl}
            className="mr-3 flex items-center hover:text-black"
          >
            <LinkIcon className="mr-1" size="18" />
            <span>Homepage</span>
          </a>
          <a
            className="flex items-center hover:text-black"
            href={data.project.url}
          >
            <GithubIcon className="mr-1" size="18" />
            <span>View on Github</span>
          </a>
        </div>
        <div
          className="remark"
          dangerouslySetInnerHTML={{
            __html: data.project.readme.childMarkdownRemark.html,
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
