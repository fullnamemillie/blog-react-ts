import React, { FC } from 'react';
import { Link } from 'react-router-dom';

interface PopularTagsListProps {
  data: string[];
}

const PopularTagsList: FC<PopularTagsListProps> = ({ data }) => {
  return (
    <ul className="flex flex-wrap gap-2">
      {data.map((tag) => (
        <Link
          to={`/?tag=${tag}`}
          key={tag}
          className="text-white text-sm font-normal bg-blog-darkGray border border-blog-darkGray px-2 py-1 leading-3 rounded-articleTag cursor-pointer hover:bg-blog-darkestGray hover:border-blog-darkestGray focus:bg-blog-darkestGray focus:border-blog-darkestGray focus:underline"
        >
          {tag}
        </Link>
      ))}
    </ul>
  );
};

export default PopularTagsList;
