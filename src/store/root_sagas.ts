import articleSaga from "./article/article.sagas";
import { all } from "redux-saga/effects";



export default function* rootSaga() {
    yield all([
        articleSaga()
    ]);
}