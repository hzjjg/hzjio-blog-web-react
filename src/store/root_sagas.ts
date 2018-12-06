import articleSaga from "./article/article.sagas";
import { all } from "redux-saga/effects";

// 所有saga 的入口
// 将导入的saga同时执行监听，需要 sagaMiddleware 中间件调用run 才会生效
export default function* rootSaga() {
    yield all([
        articleSaga()
    ]);
}