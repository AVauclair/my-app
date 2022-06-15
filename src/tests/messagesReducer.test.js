import messagesReducer, { sendMessageActionCreator } from "../redux/reducers/messagesReducer"

let state = {
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

it('messages length should be increased', () => {
    let action = sendMessageActionCreator("message")

    let newState = messagesReducer(state, action)

    expect(newState.messages.length).toBe(4)
})