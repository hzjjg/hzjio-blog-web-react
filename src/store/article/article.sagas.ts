import { call, put, takeLatest, all } from 'redux-saga/effects';
import { ArticleApi } from 'src/apis/article.api';
import { articleActions } from '.';
import { getType, ActionType } from 'typesafe-actions';

/**
 * 请求接口
 * @param action dispatch 时传入的 action
 * 因为dispatch 的是 loadlist action，所以 action 的类型是 ActionType<typeof articleActions.loadList>
 */
function* fetchArticles(action: ActionType<typeof articleActions.fetchList.request>) {
    try {
        // 库中的call方法  请求api，并传入参数
        const articles = yield call(ArticleApi.getList, {
            page: action.payload.page,
            pageSize: action.payload.pageSize
        });

        // 请求成功，用 put 传入一个 用于处理请求成功的 action 。 框架会dispatch 这个action
        // 即 dispatch loadListSucceed action, 并传入接口结果 articles
        yield put(articleActions.fetchList.success(articles));

    } catch (error) {
        // 请求错误，则dispatch loadListError action ，返回错误 同上
        yield put(articleActions.fetchList.failure(error));
    }
}


/**
 * 监听 articleActions.loadList action，触发后会执行上面定义的 fetchArticles 函数
 */
function* watchFetchArticles() {
    yield takeLatest(getType(articleActions.fetchList.request), fetchArticles);
}

// 导出方法，用于在rootSaga 导入
export default function* articleSagas() {
    yield all([
        watchFetchArticles()
    ]);
}