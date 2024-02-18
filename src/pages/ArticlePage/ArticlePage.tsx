import React, { FC } from 'react';
import ArticleBanner from '../../components/ArticleBanner/ArticleBanner';
import Container from '../../components/Container/Container';
import TagList from '../../components/TagList/TagList';
import { Link } from 'react-router-dom';
import ArticleAuthorSection from '../../components/ArticleAuthorSection/ArticleAuthorSection';

interface ArticlePageProps {}

const ArticlePage: FC<ArticlePageProps> = () => {
  return (
    <>
      <ArticleBanner />
      <Container>
        <section>
          <p className="text-articleSize mb-8 font-sourceSerif text-black/80">
            Quis nesciunt ut est eos.\nQui reiciendis doloribus.\nEst quidem
            ullam reprehenderit.\nEst omnis eligendi quis quis quo eum officiis
            asperiores quis. Et sed dicta eveniet accusamus consequatur.\nUllam
            voluptas consequatur aut eos ducimus.\nId officia est ut dicta
            provident beatae ipsa. Pariatur quo neque est perspiciatis non illo
            rerum expedita minima.\nEt commodi voluptas eos ex.\nUnde velit
            delectus deleniti deleniti non in sit.\nAliquid voluptatem magni.
            Iusto laborum aperiam neque delectus consequuntur provident est
            maiores explicabo. Est est sed itaque necessitatibus vitae
            officiis.\nIusto dolores sint eveniet quasi dolore quo laborum esse
            laboriosam.\nModi similique aut voluptates animi aut dicta
            dolorum.\nSint explicabo autem quidem et.\nNeque aspernatur
            assumenda fugit provident. Et fuga repellendus magnam dignissimos
            eius aspernatur rerum. Dolorum eius dignissimos et magnam voluptate
            aut voluptatem natus.\nAut sint est eum molestiae consequatur
            officia omnis.\nQuae et quam odit voluptatum itaque ducimus magni
            dolores ab.\nDolorum sed iure voluptatem et reiciendis. Eveniet sit
            ipsa officiis laborum.\nIn vel est omnis sed impedit quod
            magni.\nDignissimos quis illum qui atque aut ut quasi sequi. Eveniet
            sit ipsa officiis laborum.\nIn vel est omnis sed impedit quod
            magni.\nDignissimos quis illum qui atque aut ut quasi sequi.
            Sapiente vitae culpa ut voluptatem incidunt excepturi voluptates
            exercitationem.\nSed doloribus alias consectetur omnis occaecati ad
            placeat labore.\nVoluptate consequatur expedita nemo recusandae sint
            assumenda.\nQui vel totam quia fugit saepe suscipit autem quasi
            qui.\nEt eum vel ut delectus ut nesciunt animi.
          </p>
        </section>
        <section className="pb-8 border-b border-blog-gray">
          <TagList
            tagList={['adp', 'ddf', 'sans-serif', 'contona', 'roboto']}
          />
        </section>
        <section className="flex justify-center mt-6 mb-12">
          <ArticleAuthorSection usernameClassNames="BLUE" />
        </section>
        <section className="ml-32 flex gap-1 mb-10">
          <div className="text-blog-blue hover:underline">
            <Link to="/login">Sign in</Link>
          </div>
          <span>or</span>
          <div className="text-blog-blue hover:underline">
            <Link to="/register">sign up</Link>
          </div>
          <span>to add comments on this article.</span>
        </section>
      </Container>
    </>
  );
};

export default ArticlePage;
