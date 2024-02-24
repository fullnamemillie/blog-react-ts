import React, { FC } from 'react';
import Container from '../Container/Container';
import ArticleAuthorSection from '../ArticleAuthorSection/ArticleAuthorSection';
import { Author } from '../../interfaces/interfaces';

interface ArticleBannerProps {
  title: string;
  author: Author;
  createdAt: string;
  favoritesCount?: number;
  showSomeButtons: boolean;
}

const ArticleBanner: FC<ArticleBannerProps> = ({
  title,
  author,
  createdAt,
  favoritesCount,
}) => {
  return (
    <div className="bg-blog-lightBlack pt-10 pb-8 mb-8 shadow-banner">
      <Container>
        <section className="mb-8">
          <h1 className="text-white text-articleBanner font-semibold leading-articleBanner">
            {title}
          </h1>
        </section>
        <section>
          <ArticleAuthorSection
            author={author}
            favoritesCount={favoritesCount}
            createdAt={createdAt}
            showSomeButtons={true}
          />
        </section>
      </Container>
    </div>
  );
};

export default ArticleBanner;
