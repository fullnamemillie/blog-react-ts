import React, { FC } from 'react';
import { FaHeart } from 'react-icons/fa';

interface FavoriteButtonProps {
  favoritesCount: number;
}

const FavoriteButton: FC<FavoriteButtonProps> = ({ favoritesCount }) => {
  return (
    <button className="flex gap-1 items-center text-sm px-2 py-1 border border-blog-blue text-blog-blue leading-5 cursor-pointer select-none rounded-md hover:text-white hover:bg-blog-blue focus:bg-blog-darkBlue focus:border-blog-darkBlue focus:text-white">
      <FaHeart />
      <span>{favoritesCount}</span>
    </button>
  );
};

export default FavoriteButton;
