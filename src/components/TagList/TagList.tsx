import React, { FC } from 'react';

interface TagListProps {
  tagList: string[];
}

const TagList: FC<TagListProps> = ({ tagList }) => {
  return (
    <ul className="flex gap-2">
      {tagList.map((tag) => (
        <li
          key={tag}
          className="text-blog-gray text-sm font-light border border-blog-gray px-2 py-1 leading-3 rounded-articleTag cursor-pointer"
        >
          {tag}
        </li>
      ))}
    </ul>
  );
};

export default TagList;
