import React, { FC } from 'react';
import Comment from '../Comment/Comment';
import { Link, useParams } from 'react-router-dom';
import { useGetCommentsQuery } from '../../api/postsApi';

interface CommentListProps {}

const CommentList: FC<CommentListProps> = () => {
  const { slug } = useParams();

  const { data, isLoading } = useGetCommentsQuery({ slug: slug! });

  if (isLoading) {
    return <p className="w-commentsContainer mt-4">Loading comments...</p>;
  }

  if (!data || data.comments.length === 0) {
    return (
      <>
        <div className="flex gap-1 mb-4">
          <div className="text-blog-blue hover:underline">
            <Link to="/login">Sign in</Link>
          </div>
          <span>or</span>
          <div className="text-blog-blue hover:underline">
            <Link to="/register">sign up</Link>
          </div>
          <span>to add comments on this article.</span>
        </div>
        <p className="mt-6 mb-10">No comments found for this article</p>
      </>
    );
  }

  console.log(data?.comments);

  return (
    <>
      <div className="flex gap-1 mb-6">
        <div className="text-blog-blue hover:underline">
          <Link to="/login">Sign in</Link>
        </div>
        <span>or</span>
        <div className="text-blog-blue hover:underline">
          <Link to="/register">sign up</Link>
        </div>
        <span>to add comments on this article.</span>
      </div>
      {data?.comments.map((comment) => (
        <Comment key={comment.id} showSomeButtons={false} {...comment} />
      ))}
    </>
  );
};

export default CommentList;
