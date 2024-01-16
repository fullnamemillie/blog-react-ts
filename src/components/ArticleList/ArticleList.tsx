import React, { FC } from 'react';
import Article from '../Article/Article';
import { ArticleArr } from '../../interfaces/interfaces';

interface ArticleListProps {
  data: ArticleArr[];
}

const ArticleList: FC<ArticleListProps> = ({ data }) => {
  return (
    <>
      {data.map((item) => (
        <Article key={item.slug} {...item} />
      ))}
    </>
  );
};

export default ArticleList;
