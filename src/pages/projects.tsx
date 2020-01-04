import { array, guard, object, string } from "decoders";
import { graphql, ReplaceComponentRendererArgs } from "gatsby";
import React, { memo } from "react";
import { Helmet } from "react-helmet";

import Layout from "../components/layout";
import ProjectItem from "../components/projectItem";

const decoder = object({
  allProject: object({
    edges: array(
      object({
        node: object({
          description: string,
          name: string,
          slug: string,
          topics: array(string),
          url: string,
        }),
      })
    ),
  }),
});

export default memo(({ data }: ReplaceComponentRendererArgs) => {
  const projects = guard(decoder)(data);
  return (
    <Layout breadcrumbs={[{ label: "Projects", to: "/projects" }]}>
      <Helmet>
        <title>Projects | Kazushi Kawamura</title>
        <meta property="og:title" content="Projects" />
      </Helmet>
      <h2 className="font-bold my-4 heading">Projects</h2>
      <div className="flex flex-col">
        {projects.allProject.edges.map(({ node }) => (
          <ProjectItem
            key={node.name}
            name={node.name}
            to={node.slug}
            description={node.description}
            topics={node.topics}
            url={node.url}
          />
        ))}
      </div>
    </Layout>
  );
});

export const query = graphql`
  query ProjectsQuery {
    allProject {
      edges {
        node {
          name
          url
          description
          slug
          topics
        }
      }
    }
  }
`;
