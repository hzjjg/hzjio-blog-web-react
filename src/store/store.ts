import { createStore, applyMiddleware } from "redux";
import rootReducer from "./root_reducer";
import sagaMiddlewareFactory from "redux-saga";
import rootSaga from "./root_sagas";

const sagaMiddleware = sagaMiddlewareFactory();

function configStore(initState?: object) {
    return createStore(rootReducer, initState!, applyMiddleware(sagaMiddleware));
}

const store = configStore();

sagaMiddleware.run(rootSaga);

export default store;