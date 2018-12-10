import { createAsyncAction } from "typesafe-actions";
import { ArticleEntity } from "src/models/article.entity";
import { ArticlePageQuery } from "src/apis/article.api";

enum Actions {

    fetchOne = 'ARTICLE_FETCH_ONE',
    fetchOneSucceed = 'ARTICLE_FETCH_ONE_SUCCEED',
    fetchOneFailed = 'ARTICLE_FETCH_ONE_FAILED',

    fetchList = 'ARTICLE_FETCH_LIST',
    fetchListSucceed = 'ARTICLE_FETCH_LIST_SUCCEED',
    fetchListFailed = 'ARTICLE_FETCH_LIST_FAILED',

    create = '',
    createSucceed = '',
    createFailed = '',

    update = '',
    updateSucceed = '',
    updateFailed = '',

    remove = '',
    removeSucceed = '',
    removeFailed = '',
}


/** 获取文章列表 */
export const fetchList = createAsyncAction(
    Actions.fetchList,
    Actions.fetchListSucceed,
    Actions.fetchOneFailed
)<ArticlePageQuery, ArticleEntity[], Error>();

/** 获取文章 */
export const fetchOne = createAsyncAction(
    Actions.fetchOne,
    Actions.fetchOneSucceed,
    Actions.fetchOneFailed,
)<{ id: string }, ArticleEntity, Error>();

/** 增加文章 */
export const create = createAsyncAction(
    Actions.create,
    Actions.createSucceed,
    Actions.createFailed
)<ArticleEntity, { id: string }, Error>();

/** 修改文章 */
export const update = createAsyncAction(
    Actions.update,
    Actions.updateSucceed,
    Actions.updateFailed
)<ArticleEntity, { id: string }, Error>();

/** 删除文章 */
export const remove = createAsyncAction(
    Actions.remove,
    Actions.removeSucceed,
    Actions.removeFailed
)<{ id: string }, { id: string }, Error>();