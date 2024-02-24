import React, { FC } from 'react';
import ArticleBanner from '../../components/ArticleBanner/ArticleBanner';
import Container from '../../components/Container/Container';
import TagList from '../../components/TagList/TagList';
import { useParams } from 'react-router-dom';
import ArticleAuthorSection from '../../components/ArticleAuthorSection/ArticleAuthorSection';
import { useGetSpecificArticleQuery } from '../../api/postsApi';
import CommentList from '../../components/CommentList/CommentList';

interface ArticlePageProps {}

const ArticlePage: FC<ArticlePageProps> = () => {
  const { slug } = useParams();

  const { data } = useGetSpecificArticleQuery({
    slug: slug!,
  });

  if (!data) {
    return null;
  }
  return (
    <>
      <ArticleBanner
        title={data?.article.title}
        author={data?.article.author}
        createdAt={data?.article.createdAt}
        favoritesCount={data?.article.favoritesCount}
        showSomeButtons={true}
      />
      <Container>
        <section>
          <p className="text-articleSize mb-8 font-sourceSerif text-black/80">
            {data?.article.body && data.article.body.replace(/\\n/g, ' ')}
          </p>
        </section>
        <section className="pb-8 border-b border-blog-gray">
          <TagList tagList={data?.article.tagList} />
        </section>
        <section className="flex justify-center mt-6 mb-12">
          <ArticleAuthorSection
            usernameClassNames="BLUE"
            author={data?.article.author}
            createdAt={data?.article.createdAt}
            favoritesCount={data?.article.favoritesCount}
            showSomeButtons={true}
          />
        </section>
        <section className="w-commentsContainer mx-auto mb-20">
          <CommentList />
        </section>
      </Container>
    </>
  );
};

export default ArticlePage;
