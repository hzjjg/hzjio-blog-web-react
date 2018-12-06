import { createStore, applyMiddleware } from "redux";
import rootReducer from "./root_reducer";
import sagaMiddlewareFactory from "redux-saga";
import rootSaga from "./root_sagas";

const sagaMiddleware = sagaMiddlewareFactory();

function configStore(initState?: object) {
    // 创建store，并且载入中间件
    return createStore(rootReducer, initState!, applyMiddleware(sagaMiddleware));
}

const store = configStore();

// 启动所有saga
sagaMiddleware.run(rootSaga);

export default store;