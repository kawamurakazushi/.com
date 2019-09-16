import Link from "gatsby-link";
import React, { memo, useState } from "react";

import Search from "../components/search";
import { CloseIcon } from "../icons/close";
import { SearchIcon } from "../icons/search";

import logo from "../../static/images/logo.png";

const Header = memo(() => {
  const [search, setSearch] = useState(false);

  return (
    <>
      <div className="flex justify-between items-center px-6 py-6 w-full bg-white">
        <Link to="/" className="no-underline">
          <img className="w-8 h-8 rounded-full" src={logo} />
        </Link>
        <div className="cursor-pointer" onClick={() => setSearch(true)}>
          <SearchIcon size="24" />
        </div>
      </div>
      {search && (
        <div className="fixed bg-white z-10 md:min-w-main max-w-main h-full w-full px-6 py-6  md:min-w-main">
          <div className="flex flex-row-reverse mt-1 mb-4">
            <div className="cursor-pointer" onClick={() => setSearch(false)}>
              <CloseIcon size="24" />
            </div>
          </div>
          <Search />
        </div>
      )}
    </>
  );
});

export default Header;
