import * as React from "react";
import { memo } from "react";
import { Link } from "gatsby";

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
