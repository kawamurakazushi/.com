import Link from "gatsby-link";
import React, { memo } from "react";

import logo from "../../static/images/logo.png";

const Header = memo(() => (
  <div className="flex justify-center items-center px-8 py-6 w-full bg-white">
    <div className="flex-1">
      <Link to="/" className="no-underline">
        <img className="w-8 h-8 rounded-full" src={logo} />
      </Link>
    </div>
  </div>
));

export default Header;
