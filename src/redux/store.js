import { applyMiddleware, combineReducers, createStore, compose } from "redux"
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

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const storeRedux = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));

export default storeRedux;