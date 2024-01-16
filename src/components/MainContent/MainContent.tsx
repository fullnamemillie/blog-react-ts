import React, { FC } from 'react';
import ArticleList from '../ArticleList/ArticleList';
import GlobalFeed from '../GlobalFeed/GlobalFeed';
import ReactPaginate from 'react-paginate';
import PopularTagsComponent from '../PopularTagsComponent/PopularTagsComponent';
import { MainContentData } from '../../interfaces/interfaces';

interface MainContentProps {
  data?: MainContentData;
  isLoading: boolean;
  error: unknown;
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  setSearchParams: React.Dispatch<React.SetStateAction<URLSearchParams>>;
}

const MainContent: FC<MainContentProps> = ({
  data,
  isLoading,
  error,
  page,
  setPage,
  setSearchParams,
}) => {
  const handlePageChange = ({ selected }: { selected: number }) => {
    setPage(selected);

    setSearchParams((prevSearchParams) => {
      const newSearchParams = new URLSearchParams(prevSearchParams);
      newSearchParams.set('page', String(selected));
      return newSearchParams;
    });
  };

  if (isLoading) {
    return (
      <div className="flex gap-8">
        <div className="w-3/4">
          <GlobalFeed />
          <p className="py-6">Loading articles...</p>
        </div>
        <div className="w-1/4">
          <PopularTagsComponent />
        </div>
      </div>
    );
  }

  if (error) {
    return <h2>Error!</h2>;
  }

  return (
    <>
      <div className="flex gap-8">
        <div className="w-3/4">
          <GlobalFeed />
          <div>
            <ArticleList data={data?.articles || []} />
          </div>
        </div>
        <div className="w-1/4">
          <PopularTagsComponent />
        </div>
      </div>
      <div className="pt-10 pb-16">
        <ReactPaginate
          onPageChange={handlePageChange}
          pageCount={Math.ceil((data?.articlesCount || 0) / 10)}
          pageRangeDisplayed={(data?.articlesCount || 0) / 10}
          forcePage={page}
          previousLabel={null}
          nextLabel={null}
          containerClassName="flex"
          pageClassName="group"
          pageLinkClassName="px-3 py-2 text-blog-blue bg-white border border-blog-gray -ml-px group-[&:nth-child(2)]:rounded-l group-[&:nth-last-child(2)]:rounded-r hover:bg-blog-lightGray"
          activeClassName="active group"
          activeLinkClassName="group-[.active]:bg-blog-blue group-[.active]:text-white group-[.active]:border-blog-blue"
        />
      </div>
    </>
  );
};

export default MainContent;

// const [searchParams, setSearchParams] = useSearchParams();
// const [page, setPage] = React.useState(0);

// React.useEffect(() => {
//   const pageParam = searchParams.get('page');
//   setPage(pageParam ? Number(pageParam) : 0);
// }, [searchParams]);

// const tag = searchParams.get('tag');
// const queryArgs = tag ? { page, tag } : { page };

// const { data, isLoading, error } = useGetPostsQuery(queryArgs);

// const handlePageChange = ({ selected }: { selected: number }) => {
//   setPage(selected);

//   setSearchParams((prevSearchParams) => {
//     const newSearchParams = new URLSearchParams(prevSearchParams);
//     newSearchParams.set('page', String(selected));
//     return newSearchParams;
//   });
// };
