import { Article } from './../components/Article/Article';

export interface MainContentData {
  articles: ArticleArr[];
  articlesCount: number;
}

export interface ArticleArr {
  slug: string;
  title: string;
  description: string;
  body: string;
  tagList: string[];
  createdAt: string;
  updatedAt: string;
  favorited: boolean;
  favoritesCount: number;
  author: Author;
}

export interface Author {
  username: string;
  bio?: string;
  image: string;
  following: boolean;
}

export interface PopularTagsArr {
  tags: string[];
}

export interface ProfileContentData {
  profile: Profile;
}

export interface Profile {
  username: string;
  bio: string;
  image: string;
  following: boolean;
}
