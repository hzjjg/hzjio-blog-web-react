import { createStore } from "redux";
import articleReducer from "./article.reducer";

function configStore(initState?: object) {
    return createStore(articleReducer,initState!,);
}

const articleStore = configStore();

export default articleStore;