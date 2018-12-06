import { createAction } from "typesafe-actions";
import { ArticleEntity } from "src/models/article.entity";

enum Actions {
    loadList = 'ARTICLE_LOAD_LIST',
    loadListSucceed = 'ARTICLE_LOAD_LIST_SUCCEED',
    loadListFailed = 'ARTICLE_LOAD_LIST_FAILED',

    loadOne = 'ARTICLE_LOAD_ONE',
    loadOneSucceed = 'ARTICLE_LOAD_ONE_SUCCEED',
    loadOneFailed = 'ARTICLE_LOAD_ONE_FAILED',
}


/**
 * 加载文章列表
 */
export const loadList = createAction(Actions.loadList, resolve => {
    return (page: number = 1, pageSize: number = 10) => resolve({ page, pageSize });
});

/**
 * 加载文章列表成功
 */
export const loadListSucceed = createAction(Actions.loadListSucceed, resolve => {
    return (articles: ArticleEntity[]) => resolve({ articles });
});

/**
 * 加载文章列表错误
 */
export const loadListError = createAction(Actions.loadListFailed, resolve => {
    return (error: object) => resolve({ error });
});


/**
 * 获取文章
 * @param id 
 */
export const loadOne = createAction(Actions.loadOne, resolve => {
    return (page: number = 1, pageSize: number = 10) => resolve({ page, pageSize });
});

/**
 * 获取文章成功
 */
export const loadOneSucceed = createAction(Actions.loadOneSucceed, resolve => {
    return (id: number) => resolve({ id });
});


/**
 * 获取文章失败
 */
export const loadOneFailed = createAction(Actions.loadOneFailed, resolve => {
    return (error: object) => resolve({ error });
});