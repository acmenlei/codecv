import { useThrottleFn } from '@vueuse/core';
import { warningMessage } from '@/common/message';
import useUserStore from '@/store/modules/user';
import { initialInfo } from './../../store/modules/user';
import { onActivated, onDeactivated, reactive, Ref, ref, watch } from "vue";
import { queryCommunityArticleById, likeArticle } from '@/services/modules/community';
import { queryCommunityArticleCommentsById } from "@/services/modules/comments";
import { errorMessage } from '@/common/message';
import { isLogin } from '@/common/hooks/global';

export function useArticleDetail(articleId: Ref<number>) {
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
    articleId: articleId.value,
    introduce: '',
    authorInfo: initialInfo,
    comments: [] as IComment[],
  });
  const total = ref(0), commentsTotal = ref(0), commentsConditions = reactive({ pageNum: 1, pageSize: 10, articleId: articleId.value });

  async function queryArticle() {
    if (!articleId.value) {
      errorMessage('出错了');
      return;
    }
    const articleData: IResponse<IArticle> = await queryCommunityArticleById({ articleId: articleId.value }) as IResponse<IArticle>;
    if (articleData.code == 200) {
      initArticleInfo(article, articleData.data as IArticle);
    }
  }

  async function queryComments() {
    commentsConditions.articleId = articleId.value;
    const commentsData: IResponse<IComment[]> = await queryCommunityArticleCommentsById(commentsConditions) as IResponse<IComment[]>;
    if (commentsData.code == 200) {
      article.comments = commentsData.data as IComment[];
      total.value = commentsData.total as number;
      commentsTotal.value = commentsData.commentsTotal as number;
    }
  }

  function pageNumChange(pageNum: number) {
    commentsConditions.pageNum = pageNum;
    queryComments();
  }

  async function like(clicked: boolean) {
    if (!isLogin()) return errorMessage('请先登录');
    if (clicked) {
      warningMessage('点过赞了, 不用再点了～');
      return;
    }
    const { userInfo } = useUserStore();
    const { code } = await likeArticle({ articleId: articleId.value, userId: userInfo.uid }) as IResponse<unknown>
    if (code == 200) {
      article.likes.push(userInfo.uid);
    }
  }

  const init = useThrottleFn(function () {
    if (!isNaN(articleId.value)) {
      queryComments();
      queryArticle();
    }
  })

  onActivated(init);
  watch(() => articleId.value, () => {
    init();
  })
  onDeactivated(() => article.content = '');

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

export function useDelayMenuBar(articleId: Ref) {
  // 暂时解决异步渲染问题
  const delay = ref(false);

  function controlMenuBar() {
    delay.value = false;
    setTimeout(() => delay.value = true, 200)
  }

  onActivated(() => {
    controlMenuBar();
  })
  watch(() => articleId.value, () => {
    controlMenuBar();
  })

  return {
    delay
  }
}