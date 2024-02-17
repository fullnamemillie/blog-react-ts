import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { Author } from '../../interfaces/interfaces';
import moment from 'moment';

interface ArticleAuthorProps {
  author: Author;
  createdAt: string;
}

const ArticleAuthor: FC<ArticleAuthorProps> = ({ author, createdAt }) => {
  const formattedDate = moment(createdAt).format('MMMM D, YYYY');

  return (
    <>
      <Link to={`/${author.username}`}>
        <img
          className="rounded-full w-8 h-8"
          src={author.image}
          alt="author-avatar"
        />
      </Link>
      <div className="leading-4">
        <Link
          to={`/${author.username}`}
          className="font-medium hover:underline"
        >
          {author.username}
        </Link>
        <p className="text-blog-gray text-sm font-light">{formattedDate}</p>
      </div>
    </>
  );
};

export default ArticleAuthor;
