import { post } from "../config";

export function publishCommunity(data: ICommunityArticle) {
  return post('/community/publish', data);
}

export function queryCommunity(data: ICommunityCondition) {
  return post('/community/list', data);
}

export function queryCommunityArticleById(data: { articleId: number }) {
  return post('/community/queryArticleById', data);
}