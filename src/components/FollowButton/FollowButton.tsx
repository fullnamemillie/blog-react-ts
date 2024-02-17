import React, { FC } from 'react';
import { GrAdd } from 'react-icons/gr';

interface FoolowButtonProps {
  username: string;
}

const FollowButton: FC<FoolowButtonProps> = ({ username }) => {
  // if (!profileInfo) {
  //   return (
  //     <button className="text-blog-darkGray px-2 py-1 border border-blog-darkGray bg-transparent hover:bg-blog-gray text-sm leading-5 cursor-pointer select-none rounded-md">
  //       <div className="flex items-center gap-1">
  //         <GrAdd />
  //         Follow User Name
  //       </div>
  //     </button>
  //   );
  // }

  // const { profile } = profileInfo;

  return (
    <button className="text-blog-darkGray px-2 py-1 border border-blog-darkGray bg-transparent hover:bg-blog-gray text-sm leading-5 cursor-pointer select-none rounded-md">
      <div className="flex items-center gap-1">
        <GrAdd />
        Follow {username}
      </div>
    </button>
  );
};

export default FollowButton;
