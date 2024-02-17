import React, { FC } from 'react';
import Container from '../Container/Container';
import ArticleAuthor from '../ArticleAuthor/ArticleAuthor';
import FollowButton from '../FollowButton/FollowButton';
import FavoriteButton from '../FavoriteButton/FavoriteButton';

interface ArticleBannerProps {}

const ArticleBanner: FC<ArticleBannerProps> = () => {
  return (
    <div className="bg-blog-lightBlack pt-10 pb-8 mb-8">
      <Container>
        <section className="mb-8">
          <h1 className="text-white text-articleBanner font-semibold leading-articleBanner">
            Ill quantify the redundant TCP bus, that should hard drive the ADP
            bandwidth!
          </h1>
        </section>
        <section className="flex gap-6 items-center">
          <div className="flex gap-2 text-white">
            <ArticleAuthor
              author={{
                username: 'Maksim Esteban',
                image:
                  'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/F1_light_blue_flag.svg/2560px-F1_light_blue_flag.svg.png',
                following: false,
              }}
              createdAt={new Date().toISOString()}
            />
          </div>
          <div className="flex gap-1">
            <FollowButton username="Maksim Esteban" />
            <FavoriteButton favoritesCount={168} extended />
          </div>
        </section>
      </Container>
    </div>
  );
};

export default ArticleBanner;
