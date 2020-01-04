import { Link } from "gatsby";
import React, { FC } from "react";

interface Props {
  isbn: number;
  cover: string;
  title: string;
  author: string;
  readAt: string | null;
}

const BookItem: FC<Props> = ({ author, cover, isbn, title, readAt }) => {
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
      </div>
      <div className="text-xs mt-1 whitespace-no-wrap">
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
