import React, { FC } from 'react';
import { FaHeart } from 'react-icons/fa';

interface FavoriteButtonProps {
  favoritesCount: number;
  extended?: boolean;
}

const FavoriteButton: FC<FavoriteButtonProps> = ({
  favoritesCount,
  extended = false,
}) => {
  return (
    <button className="flex gap-1 items-center text-sm px-2 py-1 border border-blog-blue text-blog-blue leading-5 cursor-pointer select-none rounded-md hover:text-white hover:bg-blog-blue focus:bg-blog-darkBlue focus:border-blog-darkBlue focus:text-white">
      <FaHeart />
      <span>
        {extended && 'Favorite Article ('}
        {favoritesCount}
        {extended && ')'}
      </span>
    </button>
  );
};

export default FavoriteButton;
