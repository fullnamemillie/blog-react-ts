import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { Author } from '../../interfaces/interfaces';
import moment from 'moment';
import classNames from 'classnames';

export enum usernameClassNamesEnum {
  BLUE = 'BLUE',
  WHITE = 'WHITE',
}

interface ArticleAuthorProps {
  author: Author;
  createdAt: string;
  usernameClassNames?: keyof typeof usernameClassNamesEnum;
}

const ArticleAuthor: FC<ArticleAuthorProps> = ({
  author,
  createdAt,
  usernameClassNames = usernameClassNamesEnum.BLUE,
}) => {
  const formattedDate = moment(createdAt).format('MMMM D, YYYY');

  const usernameClassNamesStyle = classNames(
    'font-medium text-blog-blue hover:text-blog-darkBlue hover:underline',
    {
      'text-white hover:text-white':
        usernameClassNames === usernameClassNamesEnum.WHITE,
    }
  );

  return (
    <div className="flex gap-2">
      <Link to={`/${author.username}`}>
        <img
          className="rounded-full w-8 h-8"
          src={author.image}
          alt="author-avatar"
        />
      </Link>
      <div className="leading-4">
        <Link to={`/${author.username}`} className={usernameClassNamesStyle}>
          {author.username}
        </Link>
        <p className="text-blog-gray text-sm font-light">{formattedDate}</p>
      </div>
    </div>
  );
};

export default ArticleAuthor;
