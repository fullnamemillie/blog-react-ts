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

export interface SpecificArticleData {
  article: Article;
}

export interface Article {
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

export interface CommentsData {
  comments: Comment[];
}

export interface Comment {
  id: number;
  createdAt: string;
  updatedAt: string;
  body: string;
  author: Author;
}

export interface SignUpReq {
  user: SignUpReqUser;
}

export interface SignUpReqUser {
  username: string;
  email: string;
  password: string;
}

export interface SignUpRes {
  user: SignUpResUser;
}

export interface SignUpResUser {
  user: any;
  email: string;
  token: string;
  username: string;
  bio: string;
  image: string;
}
