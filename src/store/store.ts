import { createStore } from "redux";
import rootReducer from "./root_reducer";

function configStore(initState?: object) {
    return createStore(rootReducer,initState!);
}

const store = configStore();

export default store;