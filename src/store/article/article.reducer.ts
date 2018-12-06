import { ArticleEntity } from "src/models/article.entity";
import { ActionType, getType } from "typesafe-actions";
import * as actions from "./article.actions";
import { combineReducers } from "redux";

export type ArticleState = {
    readonly page: number;
    readonly pageSize: number;
    readonly articles: ReadonlyArray<ArticleEntity>;
};

export type ArticleAction = ActionType<typeof actions>;



const articles = (state: ArticleEntity[] = [], action: ArticleAction) => {
    switch (action.type) {
        case getType(actions.fetchList.request):
            return [];
        case getType(actions.fetchList.success):
            return action.payload;
        default:
            return state;
    }
};

const page = (state: number = 1, action: ArticleAction) => {
    switch (action.type) {
        case getType(actions.fetchList.request):
            return 2;

        default:
            return state;
    }
};

const pageSize = (state: number = 10, action: ArticleAction) => {
    switch (action.type) {
        case getType(actions.fetchList.success):
            return 1;

        default:
            return state;
    }
};



export default combineReducers<ArticleState, ArticleAction>({
    articles,
    page,
    pageSize
});
