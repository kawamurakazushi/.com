import * as React from "react";
import { memo } from "react";
import { Link } from "gatsby";

interface Props {
  to: string;
  date: string;
  title: string;
  tags?: string[];
}

const ArticleItem = memo(({ to, date, title, tags }: Props) => (
  <Link className="flex border-b border-grey-lighter py-4" to={to}>
    <div className="flex-1">
      <div className="mt-2 text-sm text-grey">{date}</div>
      <div className="my-3 text-xl">{title}</div>
      {tags && (
        <div className="my-3">
          {tags.map(tag => (
            <span
              key={tag}
              className="py-1 px-2 mr-2 rounded bg-grey-darker text-white text-xs"
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
