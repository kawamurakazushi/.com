import { Link } from "gatsby";
import React, { memo } from "react";

interface Props {
  to: string;
  date: string;
  title: string;
  excerpt?: string;
  tags?: string[];
}

const ArticleItem = memo(({ to, date, title, tags, excerpt }: Props) => (
  <Link className="flex mb-5" to={to}>
    <div className="flex-1">
      <span className="text-l font-medium hover:bg-black hover:text-white">
        {title}
      </span>
      <div className="text-xs mt-2 mb-1">{excerpt}</div>
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
  </Link>
));

export default ArticleItem;
