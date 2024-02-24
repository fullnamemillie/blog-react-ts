import React, { FC } from 'react';
import ArticleAuthor, {
  usernameClassNamesEnum,
} from '../ArticleAuthor/ArticleAuthor';
import FollowButton from '../FollowButton/FollowButton';
import FavoriteButton from '../FavoriteButton/FavoriteButton';
import { Author } from '../../interfaces/interfaces';

interface ArticleAuthorSectionProps {
  usernameClassNames?: keyof typeof usernameClassNamesEnum;
  author: Author;
  createdAt: string;
  favoritesCount?: number;
  showSomeButtons?: boolean;
}

const ArticleAuthorSection: FC<ArticleAuthorSectionProps> = ({
  usernameClassNames = usernameClassNamesEnum.WHITE,
  author,
  createdAt,
  favoritesCount,
  showSomeButtons,
}) => {
  return (
    <div className="flex gap-6 items-center">
      <div>
        <ArticleAuthor
          author={author}
          createdAt={createdAt}
          usernameClassNames={usernameClassNames}
        />
      </div>
      {showSomeButtons && (
        <div className="flex gap-1">
          <FollowButton username={author.username} followButton="SILVER" />
          <FavoriteButton favoritesCount={favoritesCount || 0} extended />
        </div>
      )}
    </div>
  );
};

export default ArticleAuthorSection;
