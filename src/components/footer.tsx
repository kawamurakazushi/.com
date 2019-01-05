import { Link } from "gatsby";
import React, { memo } from "react";

const Header = memo(({}) => (
  <div className="flex justify-center py-4 bg-grey-darkest">
    <div className="max-w-5xl">
      <div className="flex flex-row-reverse">
        <Link to="/">
          <div className="text-sm text-grey">kawamurakazushi.com</div>
        </Link>
      </div>
    </div>
  </div>
));

export default Header;
