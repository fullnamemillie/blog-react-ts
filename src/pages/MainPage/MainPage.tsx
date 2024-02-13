import React from 'react';
import Banner from '../../components/Banner/Banner';
import MainContent from '../../components/MainContent/MainContent';
import { useSearchParams } from 'react-router-dom';
import { useGetPostsQuery } from '../../api/postsApi';
import Container from '../../components/Container/Container';

const MainPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [page, setPage] = React.useState(0);

  React.useEffect(() => {
    const pageParam = searchParams.get('page');
    setPage(pageParam ? Number(pageParam) : 0);
  }, [searchParams]);

  const tag = searchParams.get('tag');
  const queryArgs = tag ? { page, tag } : { page };

  const { data, isLoading, error } = useGetPostsQuery(queryArgs);

  return (
    <>
      <Banner />
      <Container>
        <MainContent
          data={data}
          isLoading={isLoading}
          error={error}
          page={page}
          setPage={setPage}
          setSearchParams={setSearchParams}
        />
      </Container>
    </>
  );
};

export default MainPage;
