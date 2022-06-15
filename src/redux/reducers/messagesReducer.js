const SEND_MESSAGE = "messages/SEND-MESSAGE"

let initialState = {
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
  ]
}

const messagesReducer = (state = initialState, action) => {

  switch (action.type) {
    case SEND_MESSAGE:
      return {
        ...state,
        messages: [...state.messages, {id: state.messages.length + 1, text: action.newMessageBody }],
      }

    default:
      return state;
  }
}

export const sendMessageActionCreator = (newMessageBody) => ({ type: SEND_MESSAGE, newMessageBody})

export default messagesReducer;