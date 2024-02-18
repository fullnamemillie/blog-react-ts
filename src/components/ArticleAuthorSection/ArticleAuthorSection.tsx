import React, { FC } from 'react';
import ArticleAuthor, {
  usernameClassNamesEnum,
} from '../ArticleAuthor/ArticleAuthor';
import FollowButton from '../FollowButton/FollowButton';
import FavoriteButton from '../FavoriteButton/FavoriteButton';

interface ArticleAuthorSectionProps {
  usernameClassNames?: keyof typeof usernameClassNamesEnum;
}

const ArticleAuthorSection: FC<ArticleAuthorSectionProps> = ({
  usernameClassNames = usernameClassNamesEnum.WHITE,
}) => {
  return (
    <div className="flex gap-6 items-center">
      <div className="flex gap-2">
        <ArticleAuthor
          author={{
            username: 'Maksim Esteban',
            image:
              'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/F1_light_blue_flag.svg/2560px-F1_light_blue_flag.svg.png',
            following: false,
          }}
          createdAt={new Date().toISOString()}
          usernameClassNames={usernameClassNames}
        />
      </div>
      <div className="flex gap-1">
        <FollowButton username="Maksim Esteban" followButton="SILVER" />
        <FavoriteButton favoritesCount={168} extended />
      </div>
    </div>
  );
};

export default ArticleAuthorSection;
