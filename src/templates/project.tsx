import { graphql, ReplaceComponentRendererArgs } from "gatsby";
import React, { memo } from "react";

import Layout from "../components/layout";

// TODO Create decoder
const decode = null;

interface Props extends ReplaceComponentRendererArgs {
  data: {
    project: {
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
        <div
          className="post"
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
