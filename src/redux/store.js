import { applyMiddleware, combineReducers, createStore } from "redux"
import {reducer as formReducer} from "redux-form"
import thunkMiddleware from "redux-thunk";
import messagesReducer from "./reducers/messagesReducer";
import profileReducer from "./reducers/profileReducer";
import usersReducer from "./reducers/usersReducer";
import authReducer from "./reducers/authReducer";
import appReducer from "./reducers/appReducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    messagesPage: messagesReducer,
    usersPage: usersReducer,
    auth: authReducer,
    app: appReducer,
    form: formReducer,
});

let storeRedux = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = storeRedux;
export default storeRedux;