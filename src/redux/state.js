import profileReducer from "./reducers/profileReducer";
import messagesReducer from "./reducers/messagesReducer";

let store = {
  _state: {

    audioPage: {

    },

    friendsPage: {

    },

    messagesPage: {
      
    },

    newsPage: {

    },

    profilePage: {
      
    },

    settingsPage: {

    },
  },

  _callSubscriber() {
    console.log("Tree Entired");
  },

  getState() {
    return this._state;
  },

  subscriber(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.messagesPage = messagesReducer(this._state.messagesPage, action);

    this._callSubscriber(this._state);
  }
}

export default store