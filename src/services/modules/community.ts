import {
  type ICommunityArticle,
  ICommunityArticleUpdate,
  ICommunityCondition,
  ICommunityLike
} from '@@types/type'
import { post } from '../config'

export function publishCommunity(data: ICommunityArticle) {
  return post('/community/publish', data)
}

export function updateCommunity(data: ICommunityArticleUpdate) {
  return post('/community/update', data)
}

export function removeCommunity(data: { articleId: number }) {
  return post('/community/remove', data)
}

export function queryCommunity(data: ICommunityCondition) {
  return post('/community/list', data)
}

export function queryCommunityHotRank(data: {
  start?: string
  end?: string
  requireCount: number
}) {
  return post('/community/queryCommunityHotRank', data)
}

export function likeArticle(data: ICommunityLike) {
  return post('/community/like', data)
}

export function queryCommunityArticleById(data: { articleId: number }) {
  return post('/community/queryArticleById', data)
}
