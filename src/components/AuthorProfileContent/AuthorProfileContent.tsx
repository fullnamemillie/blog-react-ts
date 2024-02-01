import React, { FC } from 'react';
import { MainContentProps } from '../MainContent/MainContent';
import MyArticles from '../MyArticles/MyArticles';
import ArticleList from '../ArticleList/ArticleList';
import ReactPaginate from 'react-paginate';

interface AuthorProfileContentProps extends MainContentProps {}

const AuthorProfileContent: FC<AuthorProfileContentProps> = ({
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
      <div className="w-authorContainer mx-auto">
        <div>
          <MyArticles />
        </div>
        <div className="mt-4">
          <h2>Loading articles...</h2>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-authorContainer mx-auto">
        <div className="mt-4">
          <MyArticles />
        </div>
        <div>
          <h2>Error!</h2>
        </div>
      </div>
    );
  }

  return (
    <div className="w-authorContainer mx-auto">
      <div>
        <MyArticles />
      </div>
      <div>
        <ArticleList data={data?.articles || []} />
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
    </div>
  );
};

export default AuthorProfileContent;
