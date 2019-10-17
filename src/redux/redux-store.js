import {combineReducers, createStore} from "redux";
import profileReducer from "./profileReducer";
import feedReducer from "./feedReducer";
import asideReducer from "./asideReducer";

let redusers = combineReducers({
    profile: profileReducer,
    feed: feedReducer,
    aside: asideReducer
})


let store = createStore(redusers)

export default store