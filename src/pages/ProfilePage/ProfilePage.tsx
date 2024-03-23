import React from 'react';
import AuthorBanner from '../../components/AuthorBanner/AuthorBanner';
import { useParams, useSearchParams } from 'react-router-dom';
import { useGetAuthorPostsQuery } from '../../api/postsApi';
import AuthorProfileContent from '../../components/AuthorProfileContent/AuthorProfileContent';
import { useGetProfileQuery } from '../../api/profileApi';

const UserPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [page, setPage] = React.useState(0);
  const { profile } = useParams();

  React.useEffect(() => {
    const pageParam = searchParams.get('page');
    setPage(pageParam ? Number(pageParam) : 0);
  }, [searchParams]);

  const { data, isLoading, error } = useGetAuthorPostsQuery({
    page,
    author: profile!,
  });

  const { data: profileInfo } = useGetProfileQuery({
    username: profile!,
  });

  const items = [
    {
      text: 'My Articles',
      link: `/${profile}`,
    },
    {
      text: 'Favorite Articles',
      link: `/${profile}/favorites`,
    },
  ];

  if (!profileInfo) {
    return null;
  }

  return (
    <>
      <AuthorBanner profile={profileInfo.profile} />
      <AuthorProfileContent
        items={items}
        data={data}
        isLoading={isLoading}
        error={error}
        page={page}
        setPage={setPage}
        setSearchParams={setSearchParams}
      />
    </>
  );
};

export default UserPage;
