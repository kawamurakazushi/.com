import React, { memo } from "react";

import avatar from "../../static/images/avatar.jpg";

const Author = memo(() => (
  <div className="flex items-center">
    <img className="w-24 rounded-full border mr-6" src={avatar} />
    <div className="">
      <div className="text-sm text-gray-800 font-thin">Written by...</div>
      <div className="text-lg">Kazushi Kawamura</div>
      <div className="text-sm text-gray-800">
        Software Engineer based in Tokyo.
      </div>
    </div>
  </div>
));

export default Author;
