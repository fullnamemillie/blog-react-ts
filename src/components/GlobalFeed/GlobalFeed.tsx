import React from 'react';
import { NavLink, useSearchParams } from 'react-router-dom';

const GlobalFeed = () => {
  const [searchParams] = useSearchParams();

  const tag = searchParams.get('tag');

  return (
    <div className=" flex gap-4">
      <NavLink
        to="/"
        className="px-4 py-2 text-blog-blue border-b-2 border-blog-blue"
      >
        Global Feed
      </NavLink>
      <div className="px-4 py-2 text-blog-blue">{tag && <p>#{tag}</p>}</div>
    </div>
  );
};

export default GlobalFeed;
