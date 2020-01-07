import { Link } from "gatsby";
import React, { FC } from "react";

import { FileIcon } from "../icons/file";
import { SitemapIcon } from "../icons/sitemap";

interface Props {
  isbn: number;
  cover: string;
  title: string;
  author: string;
  readAt: string | null;
  html: string;
}

const BookItem: FC<Props> = ({ author, cover, isbn, title, readAt, html }) => {
  return (
    <Link to={`/books/${isbn}`} className="flex mb-5">
      <div className="w-16">
        <img src={cover} />
      </div>
      <div className="flex flex-col ml-2 flex-1">
        <div className="font-medium mr-2">
          <div className="hover:bg-black hover:text-white inline">{title}</div>
        </div>
        <div className="font-thin text-xs mt-1">{author}</div>
        <div className="mt-1 flex ">
          {html !== "" && <FileIcon className="mr-1" size="14" />}
          {html.includes("www.mindmeister.com") && (
            <SitemapIcon className="" size="14" />
          )}
        </div>
      </div>
      <div className="text-xs mt-1 whitespace-no-wrap flex flex-col">
        {readAt ? (
          <div className="">{readAt}</div>
        ) : (
          <div className="italic">reading</div>
        )}
      </div>
    </Link>
  );
};

export default BookItem;
