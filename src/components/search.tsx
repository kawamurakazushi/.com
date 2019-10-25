import algoliasearch from "algoliasearch/lite";
import { Link } from "gatsby";
import React, { memo, useState } from "react";
import {
  Configure,
  connectSearchBox,
  connectStateResults,
  Highlight,
  Hits,
  Index,
  InstantSearch,
  Snippet,
} from "react-instantsearch-dom";

import { AlgoliaLogo } from "../icons/algolia";

const SearchInput = connectSearchBox(({ refine }) => {
  return (
    <input
      autoFocus
      className="text-white w-full bg-black border border-gray-300 rounded px-3 py-2 focus:outline-none"
      placeholder="Search the website"
      onChange={e => refine(e.target.value)}
    />
  );
});

const HitResults = connectStateResults(
  ({ searchState, searchResults, children }) => (
    <>
      {searchResults && searchResults.nbHits > 0 ? (
        children
      ) : (
        <div className="text-xs">
          No results found for '{searchState.query}'.
        </div>
      )}
    </>
  )
);

const Hit = ({ hit }: { hit: { path: string } }) => {
  return (
    <Link
      to={hit.path}
      className="text-sm mb-2 block hover:bg-white hover:text-black"
    >
      <Highlight
        tagName="mark"
        className="text-sm text-gray-500"
        attribute="title"
        hit={hit}
      />
      <div>
        <Snippet attribute="excerpt" hit={hit} tagName="mark" />
      </div>
    </Link>
  );
};

const Search = memo(() => {
  const [query, setQuery] = useState("");

  const appId = process.env.GATSBY_ALGOLIA_APP_ID;
  const searchKey = process.env.GATSBY_ALGOLIA_SEARCH_KEY;
  if (appId && searchKey) {
    const searchClient = algoliasearch(appId, searchKey);
    return (
      <div>
        <InstantSearch
          searchClient={searchClient}
          indexName={"kawamurakazushi_posts"}
          onSearchStateChange={({ query: q }) => setQuery(q)}
        >
          <SearchInput />
          {query.length > 0 && (
            <>
              {[
                { name: "kawamurakazushi_posts", label: "Blog Posts" },
                { name: "kawamurakazushi_projects", label: "Projects" },
              ].map(({ name, label }) => (
                <Index key={name} indexName={name}>
                  <h2 className="mt-3 text-xs font-medium border-b border-black pb-1 mb-2">
                    {label}
                  </h2>
                  <Configure hitsPerPage={4} />
                  <HitResults>
                    <Hits hitComponent={Hit} />
                  </HitResults>
                </Index>
              ))}
            </>
          )}
          <div className="flex flex-row-reverse items-center text-xs py-4 mt-4">
            <a target="_blank" href="https://www.algolia.com/">
              <AlgoliaLogo />
            </a>
            <div className="mr-2">Search by</div>
          </div>
        </InstantSearch>
      </div>
    );
  }

  return null;
});

export default Search;
