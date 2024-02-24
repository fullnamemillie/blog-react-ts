import React, { FC } from 'react';
import ArticleAuthorSection from '../ArticleAuthorSection/ArticleAuthorSection';
import { Author } from '../../interfaces/interfaces';

interface CommentProps {
  body: string;
  author: Author;
  createdAt: string;
  showSomeButtons?: boolean;
}

const Comment: FC<CommentProps> = ({ body, author, createdAt }) => {
  return (
    <div className="mb-4 border">
      <p className="mb-2 p-4">{body}</p>
      <div className="bg-blog-lightGray">
        <div className="p-3">
          <ArticleAuthorSection
            usernameClassNames="BLUE"
            author={author}
            createdAt={createdAt}
            showSomeButtons={false}
          />
        </div>
      </div>
    </div>
  );
};

export default Comment;
