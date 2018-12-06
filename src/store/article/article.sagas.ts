import { call, put, takeLatest, all } from 'redux-saga/effects';
import { ArticleApi } from 'src/apis/article.api';
import { articleActions } from '.';
import { getType, ActionType } from 'typesafe-actions';

function* fetchArticles(action: ActionType<typeof articleActions.loadList>) {
    try {
        const articles = yield call(ArticleApi.getList, {
            page: action.payload.page,
            pageSize: action.payload.pageSize,
        });

        yield put({
            type: getType(articleActions.loadListSucceed),
            payload: { articles }
        });

    } catch (error) {
        yield put({
            type: getType(articleActions.loadListError),
            payload: { error }
        });
    }
}



function* watchFetchArticles() {
    yield takeLatest(getType(articleActions.loadList), fetchArticles);
}


export default function* articleSagas() {
    yield all([
        watchFetchArticles()
    ]);
}