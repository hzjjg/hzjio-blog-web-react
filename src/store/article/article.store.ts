import { createStore } from "redux";
import articleReducer from "./article.reducer";

const articleStore = createStore(articleReducer);

export default articleStore;