import React, { FC } from 'react';
import Container from '../Container/Container';
import ArticleAuthorSection from '../ArticleAuthorSection/ArticleAuthorSection';

interface ArticleBannerProps {}

const ArticleBanner: FC<ArticleBannerProps> = () => {
  return (
    <div className="bg-blog-lightBlack pt-10 pb-8 mb-8 shadow-banner">
      <Container>
        <section className="mb-8">
          <h1 className="text-white text-articleBanner font-semibold leading-articleBanner">
            Ill quantify the redundant TCP bus, that should hard drive the ADP
            bandwidth!
          </h1>
        </section>
        <section>
          <ArticleAuthorSection />
        </section>
      </Container>
    </div>
  );
};

export default ArticleBanner;
