import React from 'react';
// import TagList from '../TagList/TagList';
import { useGetPopularTagsQuery } from '../../api/api';
import PopularTagsList from '../PopularTagsList/PopularTagsList';

const PopularTags = () => {
  const { data, isLoading, error } = useGetPopularTagsQuery();

  if (isLoading) {
    return (
      <div className="bg-blog-lightGray px-2 pt-2 pb-6 rounded-md">
        <p className="text-black/80 mb-2">Popular Tags</p>
        <p>Loading tags...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-blog-lightGray px-2 pt-2 pb-6 rounded-md">
        <p>Error!</p>
      </div>
    );
  }

  return (
    <div className="bg-blog-lightGray px-2 pt-2 pb-6 rounded-md">
      <p className="text-black/80 mb-2">Popular Tags</p>
      <PopularTagsList data={data?.tags || []} />
    </div>
  );
};

export default PopularTags;
