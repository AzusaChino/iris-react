export type Comment = {
  id: string;
  pid: string;
  time: string;
  content: string;
  like: number;
  dislike: number;
  username: string;
  avatar: string;
  replies: Array<Comment>;
};
