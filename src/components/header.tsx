import Link from "gatsby-link";
import React, { memo } from "react";

import avatar from "../../assets/images/avatar.jpg";

const Header = memo(() => (
  <div className="flex justify-center items-center px-8 py-6 w-full bg-white">
    <div className="flex-1">
      <Link to="/" className="no-underline">
        kawamura
        <br />
        kazushi.com
      </Link>
    </div>
    <Link to="/me">
      <img className="w-10 h-10 rounded-full" src={avatar} />
    </Link>
  </div>
));

export default Header;
