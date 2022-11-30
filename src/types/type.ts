interface IResponse<T> {
  code: number;
  msg: string;
  data?: T;
  total?: number;
  commentsTotal?: number;
}

interface ICommunityArticle {
  title: string;
  content: string;
  professional: string;
  authorId: number
}

interface ICommunityArticleUpdate{
  title: string;
  content: string;
  professional: string;
  introduce: string;
  articleId: number;
}

interface ICommunityCondition {
  pageNum: number;
  pageSize: number;
  tab: number;
  uid: number;
  professional: string;
  keyword: string;
}

interface ICommunityLike {
  articleId: number;
  userId: number;
}

interface IUserInfo {
  uid: number;
  nickName: string;
  username: string;
  sex: string;
  professional: string;
  graduation: string;
  school: string;
  avatar: string;
  origin: string;
  createTime?: string;
  updateTime?: string;
}

interface IArticle {
  title: string;
  content: string;
  professional: string;
  authorId: number;
  likes: number[];
  commentTotal: number;
  hot: number;
  createTime: string;
  updateTime: string;
  articleId: number;
  introduce: string;
  authorInfo: IUserInfo
}

interface ICommentReply {
  commentId: number;
  articleId: number;
  authorId: number;
  authorInfo: IUserInfo;
  content: string;
  level: number;
  createTime: string;
  posterCommentId: number;
  replyNickName: string;
}

interface IComment {
  commentId: number;
  articleId: number;
  content: string;
  authorId: number;
  authorInfo: IUserInfo;
  level: number;
  createTime: string;
  children: ICommentReply[]
}

interface IPublishComment {
  content: string;
  articleId: number;
  level: number;
  authorId: number;
}

interface IPublishCommentReply {
  content: string,
  articleId: number,
  level: number,
  authorId: number,
  posterCommentId: number;
  replyAuthorId: number;
}

interface IArticleDetail {
  title: string;
  content: string;
  professional: string;
  authorId: number;
  like: number;
  hot: number;
  createTime: string;
  updateTime: string;
  articleId: number;
  introduce: string;
  authorInfo: IUserInfo;
  comments: IComment[];
}