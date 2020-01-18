import * as React from "react";

import Layout from "../components/layout";

const MePage = () => {
  return (
    <Layout breadcrumbs={[{ label: "Me", to: "/me" }]}>
      <h1 className="heading my-4">Hello.</h1>
      <div className="text-sm">
        <p className="my-2">I’m a Software Engineer living in Tokyo.</p>
        <p className="my-2">
          I enjoy cooking curry 🍛 and also maintain an app called currylife, a
          online community for curry lovers.
        </p>
        <h2 className="my-4 text-lg">✉️</h2>
        <ul>
          <li>
            <a
              className="underline"
              target="_blank"
              href="https://keybase.io/kawamurakazushi"
            >
              keybase (keybase.io/kawamurakazushi)
            </a>
          </li>
        </ul>
        <h2 className="my-4 text-lg">🛠</h2>
        <p>
          VSCode / vim / Notion / Kindle / Alacritty / zsh / ghq / karabiner /
          yabai / skhrd / Figma / Slack
        </p>
        <h2 className="my-4 text-lg">😍</h2>
        <p>Cooking / Coffee</p>
      </div>
    </Layout>
  );
};

export default MePage;
