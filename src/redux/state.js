let store = {
  _state: {

    audioPage: {

    },

    friendsPage: {

    },

    messagesPage: {
      chats: [{
          id: 1,
          name: "Oleg",
          avatar: "https://pbs.twimg.com/media/EZXUzQOXgAMbDm_.jpg"
        },
        {
          id: 2,
          name: "Ilya",
          avatar: "https://pbs.twimg.com/media/EZXUzQOXgAMbDm_.jpg"
        },
        {
          id: 3,
          name: "Vlad",
          avatar: "https://pbs.twimg.com/media/EZXUzQOXgAMbDm_.jpg"
        },
        {
          id: 4,
          name: "Danil",
          avatar: "https://pbs.twimg.com/media/EZXUzQOXgAMbDm_.jpg"
        },
        {
          id: 5,
          name: "Kirill",
          avatar: "https://pbs.twimg.com/media/EZXUzQOXgAMbDm_.jpg"
        },
      ],

      messages: [{
          id: 1,
          text: "Bonsoir Elliot"
        },
        {
          id: 2,
          text: "Huba-buba"
        },
        {
          id: 3,
          text: "WHO WANTS TO LIVE FOREVER"
        },
      ],

      messageText: "HELLO"
    },

    newsPage: {

    },

    profilePage: {
      posts: [{
          id: 1,
          text: "OOOH I'M SO AWESOME!",
          likes: 10
        },
        {
          id: 2,
          text: "LOOK AT ME! I AM CAT!",
          likes: 20
        },
        {
          id: 3,
          text: "JUST FOR TEST, I'M STILL A CAT",
          likes: 30
        }
      ],
      postText: "just imagine"
    },

    settingsPage: {

    },
  },

  _notifySubscriber() {
    console.log("Tree Entired");
  },

  getState() {
    return this._state;
  },

  _addPost(postText) {
    let newPost = {
      id: this._state.profilePage.posts.length - 1,
      text: this._state.profilePage.postText,
      likes: 0
    }
    this._state.profilePage.posts.push(newPost);
    this._state.profilePage.postText = '';

    this._notifySubscriber(this._state);
  },

  _updatePostText(currentPostText) {
    this._state.profilePage.postText = currentPostText;
    this._notifySubscriber(this._state);
  },

  _updateMessageText(currentMessageText) {
    this._state.messagesPage.messageText = currentMessageText;
    this._notifySubscriber(this._state);
  },

  subscriber(observer) {
    this._notifySubscriber = observer;
  },

  dispatch(action) {
    if (action.type === "ADD-POST") {
      this._addPost();
    } else if (action.type === "UPDATE-POST-TEXT") {
      this._updatePostText(action.currentPostText);
    } else if (action.type === "UPDATE-MESSAGE-TEXT") {
      this._updateMessageText(action.currentMessageText);
    }
  }
}

export default store