import { Link } from "gatsby";
import React, { memo } from "react";

const Footer = memo(({}) => (
  <div className="flex justify-center py-4 bg-gray-300">
    <div className="max-w-5xl">
      <div className="flex flex-row-reverse">
        <Link to="/">
          <div className="text-sm">kawamurakazushi.com</div>
        </Link>
      </div>
    </div>
  </div>
));

export default Footer;
