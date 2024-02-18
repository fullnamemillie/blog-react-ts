import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import FavoriteButton from '../FavoriteButton/FavoriteButton';
import TagList from '../TagList/TagList';
import { ArticleArr } from '../../interfaces/interfaces';
import ArticleAuthor from '../ArticleAuthor/ArticleAuthor';

interface ArticleArrProps extends ArticleArr {}

export const Article: FC<ArticleArrProps> = ({
  author,
  createdAt,
  favoritesCount,
  title,
  description,
  tagList,
  slug,
}) => {
  return (
    <article>
      <div className="border-t border-black/10 py-6">
        <section className="flex justify-between items-center mb-2">
          <div className="flex gap-2">
            <ArticleAuthor author={author} createdAt={createdAt} />
          </div>
          <div>
            <FavoriteButton favoritesCount={favoritesCount} />
          </div>
        </section>
        <Link to={`/articles/${slug}`}>
          <section>
            <h2 className="text-2xl text-black/80 font-semibold mb-1">
              {title}
            </h2>
            <p className="text-articleText font-light text-blog-gray mb-4">
              {description}
            </p>
          </section>
          <section className="flex justify-between">
            <p className="text-blog-gray text-sm font-light">Read more...</p>
            <TagList tagList={tagList} />
          </section>
        </Link>
      </div>
    </article>
  );
};
export default Article;
