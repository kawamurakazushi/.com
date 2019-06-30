import { Link } from "gatsby";
import React, { memo } from "react";

interface Props {
  to: string;
  date: string;
  title: string;
  tags?: string[];
}

const ArticleItem = memo(({ to, date, title, tags }: Props) => (
  <Link className="flex border-b border-gray-200" to={to}>
    <div className="flex-1">
      <div className="mt-2 text-sm text-gray-900">{date}</div>
      <div className="my-1 text-xl">{title}</div>
      {tags && (
        <div className="my-3">
          {tags.map(tag => (
            <span
              key={tag}
              className="py-1 px-2 mr-2 rounded bg-gray-500 text-white text-xs"
            >
              {`#${tag}`}
            </span>
          ))}
        </div>
      )}
    </div>
  </Link>
));

export default ArticleItem;
