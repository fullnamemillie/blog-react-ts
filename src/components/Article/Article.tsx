import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import FavoriteButton from '../FavoriteButton/FavoriteButton';
import TagList from '../TagList/TagList';
import { ArticleArr } from '../../interfaces/interfaces';
import moment from 'moment';

interface ArticleArrProps extends ArticleArr {}

export const Article: FC<ArticleArrProps> = ({
  author,
  createdAt,
  favoritesCount,
  title,
  description,
  tagList,
}) => {
  const formattedDate = moment(createdAt).format('MMMM D, YYYY');

  return (
    <article>
      <div className="border-t border-black/10 py-6">
        <section className="flex justify-between items-center mb-2">
          <div className="flex gap-2">
            <Link to={`/@${author.username}`}>
              <img
                className="rounded-full w-8 h-8"
                src={author.image}
                alt="author-avatar"
              />
            </Link>
            <div className=" leading-4">
              <Link
                to={`/@${author.username}`}
                className="text-blog-blue font-medium hover:text-blog-darkBlue hover:underline"
              >
                {author.username}
              </Link>
              <p className="text-blog-gray text-sm font-light">
                {formattedDate}
              </p>
            </div>
          </div>
          <div>
            <FavoriteButton favoritesCount={favoritesCount} />
          </div>
        </section>
        <section>
          <h2 className="text-2xl text-black/80 font-semibold mb-1">{title}</h2>
          <p className="text-articleText font-light text-blog-gray mb-4">
            {description}
          </p>
        </section>
        <section className="flex justify-between">
          <Link to="/@alexey" className="text-blog-gray text-sm font-light">
            Read more...
          </Link>
          <TagList tagList={tagList} />
        </section>
      </div>
    </article>
  );
};
export default Article;
