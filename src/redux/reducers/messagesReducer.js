const UPDATE_MESSAGE_TEXT = "UPDATE-MESSAGE-TEXT"
const SEND_MESSAGE = "SEND-MESSAGE"

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
    ],

    areaMessageText: "HELLO"
}

const messagesReducer = (state = initialState, action) => {
    switch (action.type)
    {
        case UPDATE_MESSAGE_TEXT:
            state.areaMessageText = action.currentMessageText;
            return state;
        
        case SEND_MESSAGE:
            let newMessage = {
                id: state.messages.length - 1,
                text: action.currentMessageText
              }
              state.messages.push(newMessage)
              state.areaMessageText = '';
            return state;

        default:
            return state;
    }
}

export const updateMessageTextActionCreator = (text) => ({type: UPDATE_MESSAGE_TEXT, currentMessageText: text})
export const sendMessageActionCreator = (text) => ({type: SEND_MESSAGE, currentMessageText: text})

export default messagesReducer;