import React from 'react';
import { GrAdd } from 'react-icons/gr';

const FollowButton = () => {
  return (
    <button className="text-blog-darkGray px-2 py-1 border border-blog-darkGray bg-transparent hover:bg-blog-gray text-sm leading-5 cursor-pointer select-none rounded-md">
      <div className="flex items-center gap-1">
        <GrAdd />
        Follow Maksim Esteban
      </div>
    </button>
  );
};

export default FollowButton;
