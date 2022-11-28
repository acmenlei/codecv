interface IResponse {
  code: number;
  msg: string;
  data?: any;
}

interface ICommunityArticle {
  title: string;
  content: string;
  professional: string;
  authorId: number
}

interface ICommunityCondition {
  pageNum: number;
  pageSize: number;
  tab: number;
  uid: number;
  professional: string;
  keyword: string;
}

interface IArticle {
  title: string;
  content: string;
  professional: string;
  authorId: number;
  like: number;
  hot: number;
  createTime: string;
  updateTime: string;
  articleId: number;
}