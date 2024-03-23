import classNames from 'classnames';
import React, { FC } from 'react';
import {
  NavLink,
  useLocation,
  useParams,
  useSearchParams,
} from 'react-router-dom';

export interface FavoritedArticles {
  text: string;
  link: string;
}

interface GlobalFeedProps {
  items?: FavoritedArticles[];
}

const GlobalFeed: FC<GlobalFeedProps> = ({ items }) => {
  const [searchParams] = useSearchParams();
  const { pathname } = useLocation();
  const { profile } = useParams<{ profile: string }>();

  const tag = searchParams.get('tag');

  const navLinkClasses = (item: { text: string; link: string }) =>
    classNames('px-4 py-2 mr-2', {
      'text-blog-blue': item.link === pathname || item.link === `/${profile}`,
      'text-blog-gray': item.link !== pathname && item.link !== `/${profile}`,
      'border-blog-blue border-b-2':
        item.link === pathname || item.link === `/${profile}`,
    });

  return (
    <div className="flex gap-4 mb-2">
      <div>
        {items &&
          items.map((item) => (
            <NavLink
              key={item.link}
              to={item.link}
              className={navLinkClasses(item)}
            >
              {item.text}
            </NavLink>
          ))}
      </div>
      <div className="px-4 text-blog-blue">{tag && <p>#{tag}</p>}</div>
    </div>
  );
};

export default GlobalFeed;
