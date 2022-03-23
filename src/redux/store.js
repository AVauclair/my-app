import { combineReducers, createStore } from "redux"
import messagesReducer from "./reducers/messagesReducer";
import profileReducer from "./reducers/profileReducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    messagesPage: messagesReducer,
});

let storeRedux = createStore(reducers);
export default storeRedux;