import React, { FC } from 'react';
import Banner from '../../components/Banner/Banner';
import MainContent from '../../components/MainContent/MainContent';
import { useSearchParams } from 'react-router-dom';
import { useGetPostsQuery } from '../../api/postsApi';
import Container from '../../components/Container/Container';

interface MainPageProps {
  isLoggedIn: boolean;
}

const MainPage: FC<MainPageProps> = ({ isLoggedIn }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [page, setPage] = React.useState(0);

  React.useEffect(() => {
    const pageParam = searchParams.get('page');
    setPage(pageParam ? Number(pageParam) : 0);
  }, [searchParams]);

  const tag = searchParams.get('tag');
  const queryArgs = tag ? { page, tag } : { page };

  const { data, isLoading, error } = useGetPostsQuery(queryArgs);

  const items = isLoggedIn
    ? [
        {
          text: 'Your Feed',
          link: '/your-feed',
        },
        {
          text: 'Global Feed',
          link: '/',
        },
      ]
    : [
        {
          text: 'Global Feed',
          link: '/',
        },
      ];

  return (
    <>
      <Banner />
      <Container>
        <MainContent
          items={items}
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
