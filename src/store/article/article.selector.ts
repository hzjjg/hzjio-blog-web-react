import { createSelector } from "reselect";
import { ArticleState } from ".";

export const getArticleList = (state: ArticleState) => state.articles;

export const getPage = (state: ArticleState) => state.page;

export const getPageSize = (state: ArticleState) => state.pageSize;

/**
 * test
 */
export const getTestList = createSelector(
    getArticleList,
    getPage,
    getPageSize,
    (articles, page, pageSize) => {
        return articles.slice(page * pageSize, (page + 1 * pageSize));
    }
);