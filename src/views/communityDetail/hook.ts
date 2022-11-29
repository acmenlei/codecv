import { initialInfo } from './../../store/modules/user';
import { reactive, ref, watchEffect } from "vue";
import { queryCommunityArticleById } from '@/services/modules/community';
import { queryCommunityArticleCommentsById } from "@/services/modules/comments";
import { errorMessage } from '@/common/message';

export function useArticleDetail(articleId: number) {
  const article = reactive({
    title: '',
    content: '',
    professional: '',
    authorId: 0,
    like: 0,
    hot: 0,
    createTime: '',
    updateTime: '',
    articleId,
    introduce: '',
    authorInfo: initialInfo,
    comments: [] as IComment[],
  });
  const total = ref(0), commentsTotal = ref(0), commentsConditions = reactive({ pageNum: 1, pageSize: 10, articleId });

  async function queryArticle() {
    if (!articleId) {
      errorMessage('出错了');
      return;
    }
    const articleData: IResponse<IArticle> = await queryCommunityArticleById({ articleId: +articleId }) as IResponse<IArticle>;
    if (articleData.code == 200) {
      initArticleInfo(article, articleData.data as IArticle);
    }
  }
  async function queryComments() {
    console.log('search...')
    const commentsData: IResponse<IComment[]> = await queryCommunityArticleCommentsById(commentsConditions) as IResponse<IComment[]>;
    if (commentsData.code == 200) {
      article.comments = commentsData.data as IComment[];
      total.value = commentsData.total as number;
      commentsTotal.value = commentsData.commentsTotal as number;
    }
  }
  function pageNumChange(pageNum: number) {
    commentsConditions.pageNum = pageNum;
  }
  watchEffect(queryComments)

  return {
    total,
    commentsTotal,
    article,
    queryArticle,
    pageNumChange,
    queryComments
  }
}

function initArticleInfo(article: IArticle, info: IArticle) {
  article.articleId = info.articleId;
  article.title = info.title;
  article.content = info.content;
  article.professional = info.professional;
  article.articleId = info.authorId;
  article.like = info.like;
  article.createTime = info.createTime;
  article.updateTime = info.updateTime;
  article.introduce = info.introduce;
  article.authorInfo = info.authorInfo;
}