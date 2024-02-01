import React from 'react';
import AuthorBanner from '../../components/AuthorBanner/AuthorBanner';
import { useParams, useSearchParams } from 'react-router-dom';
import { useGetAuthorPostsQuery } from '../../api/api';
import AuthorProfileContent from '../../components/AuthorProfileContent/AuthorProfileContent';

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

  // console.log(profile!);
  // console.log(data);

  return (
    <>
      <AuthorBanner />
      <AuthorProfileContent
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
