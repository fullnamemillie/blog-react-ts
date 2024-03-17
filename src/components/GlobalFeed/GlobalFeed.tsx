import React, { FC } from 'react';
import { NavLink, useSearchParams } from 'react-router-dom';

interface FavoritedArticles {
  text: string;
  link: string;
}

interface GlobalFeedProps {
  defaultText?: string;
  defaultLink?: string;
  items?: FavoritedArticles[];
}

const GlobalFeed: FC<GlobalFeedProps> = ({
  defaultText = 'Global Feed',
  defaultLink = '/',
  items,
}) => {
  const [searchParams] = useSearchParams();

  const tag = searchParams.get('tag');

  return (
    <div className=" flex gap-4">
      <NavLink
        to={defaultLink}
        className="px-4 py-2 text-blog-blue border-b-2 border-blog-blue"
      >
        {defaultText}
      </NavLink>
      <div>
        {items &&
          items.map((item) => (
            <NavLink key={item.link} to={item.link}>
              {item.text}
            </NavLink>
          ))}
      </div>
      <div className="px-4 py-2 text-blog-blue">{tag && <p>#{tag}</p>}</div>
    </div>
  );
};

export default GlobalFeed;
