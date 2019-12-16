import React, { memo } from "react";

import { GithubIcon } from "../icons/github";
import { RssIcon } from "../icons/rss";

const Footer = memo(({}) => (
  <div className="bg-black text-gray-200 text-xs py-2 mt-4">
    <div className="max-w-main m-auto px-6 flex justify-between items-center">
      <div>2019 © Kazushi Kawamura.</div>
      <div className="flex">
        <a
          target="_blank"
          href="https://github.com/kawamurakazushi/.com"
          className="mr-2"
        >
          <GithubIcon size="18" />
        </a>
        <a target="_blank" href="https:/kawamurakazushi.com/rss.xml">
          <RssIcon size="18" />
        </a>
      </div>
    </div>
  </div>
));

export default Footer;
