import React from 'react';
import { NavLink } from 'react-router-dom';

const MyArticles = () => {
  return (
    <div className="flex gap-2">
      <NavLink
        to=""
        className={({ isActive }: { isActive: boolean }) =>
          isActive
            ? 'px-4 py-2 text-blog-blue border-b-2 border-blog-blue'
            : 'px-4 py-2 text-blog-gray'
        }
      >
        My Articles
      </NavLink>
      <NavLink
        to="/favorites"
        className={({ isActive }: { isActive: boolean }) =>
          isActive
            ? 'px-4 py-2 text-blog-blue border-b-2 border-blog-blue'
            : 'px-4 py-2 text-blog-gray'
        }
      >
        Favorites Articles
      </NavLink>
    </div>
  );
};

export default MyArticles;
