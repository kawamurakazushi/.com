import * as React from "react";

import Layout from "../components/layout";

const MePage = () => {
  return (
    <Layout breadcrumbs={[{ label: "Me", to: "/me" }]}>
      <h1 className="heading mb-4">Hello.</h1>
      <div className="text-sm">
        <p className="my-2">I’m a Software Engineer living in Tokyo.</p>
        <p className="my-2">
          I enjoy cooking curry 🍛 and also maintain an app called currylife, a
          online community for curry lovers.
        </p>
        <p className="my-2">
          Please feel free to DM me on{" "}
          <a
            className="underline"
            target="_blank"
            href="https://twitter.com/kawamurakazush1"
          >
            twitter
          </a>{" "}
          or send{" "}
          <a
            className="underline"
            target="_blank"
            href="mailto:me@kawamurakazushi.com"
          >
            message
          </a>{" "}
          :)
        </p>
        <h2 className="my-4 text-base">🛠Tools I use daily </h2>
        <p>
          VSCode / vim / Notion / Kindle / Alacritty / zsh / ghq / karabiner /
          yabai / skhrd / Slack
        </p>
      </div>
    </Layout>
  );
};

export default MePage;
