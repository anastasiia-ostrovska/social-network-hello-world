// Date
type Day = number;
type Month =
  | 'January'
  | 'February'
  | 'March'
  | 'April'
  | 'May'
  | 'June'
  | 'July'
  | 'August'
  | 'September'
  | 'October'
  | 'November'
  | 'December';
type Time = `${number}:${number}`;
type Date = `${Day} ${Month}, ${Time} `;

// Like
export type UserId = string;

interface Likes {
  count: number;
  users: UserId[];
}

// Author
interface Author {
  id: UserId;
  name: string;
  photos: {
    avatar: string | null;
  };
  job: string;
}

// Post
export interface Post {
  id: string;
  date: Date;
  title: string;
  img: string | null;
  likes: Likes;
  author: Author;
  createdAt: string;
  updatedAt: string;
}

// Posts query params:
export type Filters = 'liked' | 'followed' | 'mine';

export interface PostsFilters {
  page: number;
  count: number;
  search: string;
  filters: Filters[];
}

// Post List
export interface PostListData {
  postsTotal: number;
  totalPages: number;
  perPage: number;
  posts: Post[];
}
