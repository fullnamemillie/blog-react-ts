import React from 'react';
import FollowButton from '../FollowButton/FollowButton';

const AuthorBanner = () => {
  return (
    <section className="bg-blog-lightGray pt-8 pb-4 mb-6">
      <div className="w-authorContainer m-auto">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/F1_light_blue_flag.svg/2560px-F1_light_blue_flag.svg.png"
          alt="author-avatar"
          className="w-authorImage h-authorImage rounded-full mb-4 mx-auto"
        />
        <p className="mb-2 text-center text-2xl font-bold text-black/80">
          Maksim Esteban
        </p>
      </div>
      <div className="w-authorContainer m-auto text-end">
        <FollowButton />
      </div>
    </section>
  );
};

export default AuthorBanner;
