import classNames from 'classnames';
import React, { FC } from 'react';
import { GrAdd } from 'react-icons/gr';

export enum followButtonEnum {
  GRAY = 'GRAY',
  SILVER = 'SILVER',
}

interface FoolowButtonProps {
  username: string;
  followButton?: keyof typeof followButtonEnum;
}

const FollowButton: FC<FoolowButtonProps> = ({
  username,
  followButton = followButtonEnum.GRAY,
}) => {
  const followbuttonStyle = classNames(
    'px-2 py-1 border bg-transparent text-sm leading-5 cursor-pointer select-none rounded-md',
    {
      'text-blog-darkGray border-blog-darkGray hover:bg-blog-gray':
        followButton === followButtonEnum.GRAY,
      'text-blog-darkGray border-blog-gray hover:bg-blog-silver hover:text-white hover:border-blog-silver':
        followButton === followButtonEnum.SILVER,
    }
  );

  return (
    <button className={followbuttonStyle}>
      <div className="flex items-center gap-1">
        <GrAdd />
        Follow {username}
      </div>
    </button>
  );
};

export default FollowButton;

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
