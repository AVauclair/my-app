import { combineReducers, createStore } from "redux"
import messagesReducer from "./reducers/messagesReducer";
import profileReducer from "./reducers/profileReducer";
import usersReducer from "./reducers/usersReducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    messagesPage: messagesReducer,
    usersPage: usersReducer,
});

let storeRedux = createStore(reducers);
export default storeRedux;