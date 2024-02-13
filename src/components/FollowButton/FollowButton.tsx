import React, { FC } from 'react';
import { GrAdd } from 'react-icons/gr';
import { ProfileContentData } from '../../interfaces/interfaces';

interface FoolowButtonProps {
  profileInfo?: ProfileContentData;
}

const FollowButton: FC<FoolowButtonProps> = ({ profileInfo }) => {
  if (!profileInfo) {
    return (
      <button className="text-blog-darkGray px-2 py-1 border border-blog-darkGray bg-transparent hover:bg-blog-gray text-sm leading-5 cursor-pointer select-none rounded-md">
        <div className="flex items-center gap-1">
          <GrAdd />
          Follow User Name
        </div>
      </button>
    );
  }

  const { profile } = profileInfo;

  return (
    <button className="text-blog-darkGray px-2 py-1 border border-blog-darkGray bg-transparent hover:bg-blog-gray text-sm leading-5 cursor-pointer select-none rounded-md">
      <div className="flex items-center gap-1">
        <GrAdd />
        Follow {profile.username}
      </div>
    </button>
  );
};

export default FollowButton;
