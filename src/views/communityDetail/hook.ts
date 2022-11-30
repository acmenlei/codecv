import { warningMessage } from '@/common/message';
import useUserStore from '@/store/modules/user';
import { initialInfo } from './../../store/modules/user';
import { reactive, ref, watchEffect } from "vue";
import { queryCommunityArticleById, likeArticle } from '@/services/modules/community';
import { queryCommunityArticleCommentsById } from "@/services/modules/comments";
import { errorMessage } from '@/common/message';

export function useArticleDetail(articleId: number) {
  const article = reactive({
    title: '',
    content: '',
    professional: '',
    authorId: 0,
    likes: [] as number[],
    commentTotal: 0,
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
  async function like(clicked: boolean) {
    if (clicked) {
      warningMessage('点过赞了, 不用再点了～');
      return;
    }
    const { userInfo } = useUserStore();
    const { code } = await likeArticle({ articleId, userId: userInfo.uid }) as IResponse<unknown>
    if(code == 200) {
      article.likes.push(userInfo.uid);
    }
  }
  watchEffect(queryComments)

  return {
    total,
    commentsTotal,
    article,
    like,
    queryArticle,
    pageNumChange,
    queryComments
  }
}

function initArticleInfo(article: IArticle, info: IArticle) {
  article.articleId = info.articleId;
  article.title = info.title;
  article.content = info.content;
  article.commentTotal = info.commentTotal;
  article.professional = info.professional;
  article.authorId = info.authorId;
  article.likes = info.likes;
  article.createTime = info.createTime;
  article.updateTime = info.updateTime;
  article.introduce = info.introduce;
  article.authorInfo = info.authorInfo;
}