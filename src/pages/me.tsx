import * as React from "react";

import Layout from "../components/layout";

const MePage = () => {
  return (
    <Layout breadcrumbs={[{ label: "Me", to: "/me" }]}>
      <h1 className="heading my-4">👋 Hello.</h1>
      <div className="text-sm">
        <p className="my-2">I’m a Software Engineer living in Tokyo.</p>
        <p className="my-2">
          I enjoy cooking curry 🍛 and also maintain an app called currylife, a
          online community for curry lovers.
        </p>
        <div className="my-4 flex items-center">
          <h2 className="text-lg mr-2">✉️</h2>
          <a
            className="underline"
            target="_blank"
            href="https://keybase.io/kawamurakazushi"
          >
            keybase (keybase.io/kawamurakazushi)
          </a>
        </div>
      </div>
    </Layout>
  );
};

export default MePage;
