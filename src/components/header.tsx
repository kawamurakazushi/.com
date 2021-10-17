import { Link } from "gatsby";
import React, { memo, useState } from "react";

import { CloseIcon } from "../icons/close";
// import { MenuIcon } from "../icons/menu";
// import { SearchIcon } from "../icons/search";

import * as avatar from "../../static/images/avatar.jpg";
import * as logo from "../../static/images/logo2.png";

const Header = memo(() => {
  const [search, setSearch] = useState(false);
  const [menu, setMenu] = useState(false);

  const MenuLink = ({ to, title }: { to: string; title: string }) => {
    return (
      <Link
        onClick={() => {
          setSearch(false);
          setMenu(false);
        }}
        to={to}
        className="flex items-center mb-1 cursor-pointer"
      >
        <div className="mr-4 heading">{title}</div>
        <div className="flex-1 h-px bg-white" />
      </Link>
    );
  };

  const link = "font-thin text-xs hover:text-white hover:bg-black";

  return (
    <>
      <div className="flex items-center justify-between w-full px-6 py-4">
        <div className="flex items-center">
          <Link to="/" className="no-underline">
            <img
              src={logo.default}
              className="w-8"
              style={{
                transform: `rotate(${
                  360 * ((new Date().getMonth() + 1) / 12)
                }deg)`,
              }}
            />
          </Link>
        </div>
        <div className="flex items-center">
          <Link className={`${link} mr-1`} to="/blogs">
            Writings
          </Link>
          <Link className={`${link} mr-1`} to="/projects">
            Projects
          </Link>
          <Link className={`${link} mr-1`} to="/books">
            Books
          </Link>
          <a
            className={`${link} mr-2`}
            target="_blank"
            href="https://currylife.me/users/bbqSpNlK5bVSxakRfCz8F4Z6IJy1"
          >
            Curries
          </a>
          <Link to="/me">
            <img src={avatar.default} className="w-6 rounded-full" />
          </Link>
          {/* <div className="mr-2 cursor-pointer" onClick={() => setSearch(true)}>
            <SearchIcon size="24" />
          </div> */}
          {/* <div className="cursor-pointer" onClick={() => setMenu(true)}>
            <MenuIcon size="24" />
          </div> */}
        </div>
      </div>
      {(menu || search) && (
        <div className="fixed left-0 z-10 w-full h-full bg-black">
          <div className="px-6 py-4 mx-auto text-white md:min-w-main max-w-main">
            <div className="flex flex-row-reverse mt-1 mb-4">
              <div
                className="cursor-pointer"
                onClick={() => {
                  setSearch(false);
                  setMenu(false);
                }}
              >
                <CloseIcon size="24" />
              </div>
            </div>
            {menu && (
              <>
                <MenuLink to="/me" title="About me" />
                <MenuLink to="/blogs" title="Writings" />
                <MenuLink to="/projects" title="Projects" />
                <MenuLink to="/#books" title="Book Reviews" />
              </>
            )}
            {search && (
              <>
                <Search />
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
});

export default Header;
