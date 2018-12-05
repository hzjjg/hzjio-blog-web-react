import { combineReducers } from "redux";
import articleReducer from "./article/article.reducer";
import { StateType } from "typesafe-actions";

const rootReducer = combineReducers({
    article: articleReducer
});

export type RootState = StateType<typeof rootReducer>;

export default rootReducer;