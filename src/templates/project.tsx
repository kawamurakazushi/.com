import { graphql, ReplaceComponentRendererArgs } from "gatsby";
import React, { memo } from "react";

import Layout from "../components/layout";

interface Props extends ReplaceComponentRendererArgs {}

export default memo(({ data }: Props) => {
  return <Layout>{JSON.stringify(data)}</Layout>;
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
      readme
      url
    }
  }
`;
