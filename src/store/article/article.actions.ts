import { createAsyncAction } from "typesafe-actions";
import { ArticleEntity } from "src/models/article.entity";
import { ArticlePageQuery } from "src/apis/article.api";

enum Actions {
    fetchList = 'ARTICLE_FETCH_LIST',
    fetchListSucceed = 'ARTICLE_FETCH_LIST_SUCCEED',
    fetchListFailed = 'ARTICLE_FETCH_LIST_FAILED',

    fetchdOne = 'ARTICLE_FETCH_ONE',
    fetchOneSucceed = 'ARTICLE_FETCH_ONE_SUCCEED',
    fetchOneFailed = 'ARTICLE_FETCH_ONE_FAILED',

    update = '',
    updateSucceed = '',
    updateFailed = ''
}

/** 获取文章列表 */
export const fetchList = createAsyncAction(
    Actions.fetchList,
    Actions.fetchListSucceed,
    Actions.fetchOneFailed
)<ArticlePageQuery, ArticleEntity[], Error>();

/** 获取文章 */
export const fetchOne = createAsyncAction(
    Actions.fetchdOne,
    Actions.fetchOneSucceed,
    Actions.fetchOneFailed,
)<{ id: string }, ArticleEntity, Error>();

// export const update = createAsyncAction()