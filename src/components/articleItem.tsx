import { Link } from "gatsby";
import React, { memo } from "react";

interface Props {
  to: string;
  date: string;
  title: string;
  excerpt?: string;
  tags?: string[];
  type?: "detail" | "simple";
}

const ArticleItem = memo(
  ({ to, date, title, tags, excerpt, type = "detail" }: Props) => {
    if (type === "simple") {
      return (
        <Link className="flex mb-4 justify-between items-end" to={to}>
          <div className="flex-1 mr-4 flex">
            <h3 className="text-sm md:text-base hover:bg-black hover:text-white">
              {title}
            </h3>
          </div>
          <div className="text-xs text-gray-400">{date}</div>
        </Link>
      );
    }

    return (
      <div className="mb-5">
        <Link className="flex" to={to}>
          <div className="flex-1">
            <h3 className="inline text-base font-medium hover:bg-black hover:text-white">
              {title}
            </h3>
            {excerpt && <div className="text-xs mt-2 mb-1">{excerpt}</div>}
          </div>
        </Link>
        <div className="flex">
          {tags && (
            <>
              {tags.map(tag => (
                <Link key={tag} to={`/tags/${tag}`} className="text-xs mr-1">
                  {`#${tag}`}
                </Link>
              ))}
            </>
          )}
          <div className="text-xs text-gray-400">ー {date}</div>
        </div>
      </div>
    );
  }
);

export default ArticleItem;
