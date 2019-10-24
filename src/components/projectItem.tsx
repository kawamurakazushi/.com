import { Link } from "gatsby";
import React, { memo } from "react";

import { GithubIcon } from "../icons/github";

interface Props {
  to: string;
  name: string;
  description: string;
  url: string;
  topics: string[];
}

const ProjectItem = memo(({ to, name, topics, description, url }: Props) => {
  return (
    <div className="mb-5 block">
      <Link to={`/projects/${name}`} className="mb-5">
        <div className="flex">
          <span className="text-l font-medium hover:bg-black hover:text-white">
            {name}
          </span>
        </div>
        <div className="text-xs mt-2 mb-1">{description}</div>
      </Link>
      <div className="flex items-center">
        <a className="flex items-center" href={url}>
          <GithubIcon className="mr-1" size="18" />
        </a>
        <div className="text-xs flex">
          {topics.map(topic => (
            <div key={topic} className="mr-1 italic text-gray-900">
              {topic}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
});

export default ProjectItem;
