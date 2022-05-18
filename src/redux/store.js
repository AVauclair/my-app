import { combineReducers, createStore } from "redux"
import messagesReducer from "./reducers/messagesReducer";
import profileReducer from "./reducers/profileReducer";
import usersReducer from "./reducers/usersReducer";
import authReducer from "./reducers/authReducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    messagesPage: messagesReducer,
    usersPage: usersReducer,
    auth: authReducer,
});

let storeRedux = createStore(reducers);

window.store = storeRedux;
export default storeRedux;