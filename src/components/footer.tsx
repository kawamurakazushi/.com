import React, { memo } from "react";

import { GithubIcon } from "../icons/github";

const Footer = memo(({}) => (
  <div className="bg-black text-gray-200 text-xs py-2 mt-4">
    <div className="max-w-main m-auto px-6 flex justify-between items-center">
      <div>2019 © Kazushi Kawamura.</div>
      <a target="_blank" href="https://github.com/kawamurakazushi/.com">
        <GithubIcon size="18" />
      </a>
    </div>
  </div>
));

export default Footer;
