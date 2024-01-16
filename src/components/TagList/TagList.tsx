import React, { FC } from 'react';

interface TagListProps {
  tagList: string[];
}

const TagList: FC<TagListProps> = ({ tagList }) => {
  return (
    <ul className="flex gap-2">
      {tagList.map((item) => (
        <li
          key={item}
          className="text-blog-gray text-sm font-light border border-blog-gray px-1 py-1 leading-3 rounded-articleTag cursor-pointer"
        >
          {item}
        </li>
      ))}
    </ul>
  );
};

export default TagList;
