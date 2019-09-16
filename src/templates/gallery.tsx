import { array, guard, object, string } from "decoders";
import { graphql, ReplaceComponentRendererArgs } from "gatsby";
import React, { memo } from "react";
import { Helmet } from "react-helmet";

import Layout from "../components/layout";

const decoder = object({
  images: object({
    edges: array(
      object({
        node: object({
          childImageSharp: object({ fixed: object({ src: string }) }),
          id: string,
        }),
      })
    ),
  }),
});

export default memo(({ data }: ReplaceComponentRendererArgs) => {
  const images = guard(decoder)(data).images.edges;
  return (
    <Layout>
      <Helmet>
        <title>Gallery | Kazushi Kawamura</title>
        {/* <meta property="og:title" content={project.name} />
        <meta property="og:description" content={project.description} /> */}
      </Helmet>
      <h2 className="font-bold text-xl mb-2 md:text-5xl">Gallery</h2>
      <div className="flex flex-wrap">
        {images.map(({ node }) => {
          return (
            <div className="w-1/3 p-1" key={node.id}>
              <img className="rounded" src={node.childImageSharp.fixed.src} />
            </div>
          );
        })}
      </div>
    </Layout>
  );
});

export const query = graphql`
  query GalleryQuery($name: String!) {
    images: allFile(
      filter: {
        sourceInstanceName: { eq: "galleries" }
        relativeDirectory: { eq: $name }
      }
    ) {
      edges {
        node {
          id
          childImageSharp {
            fixed(width: 300, height: 300) {
              srcSet
              src
            }
          }
        }
      }
    }
  }
`;
