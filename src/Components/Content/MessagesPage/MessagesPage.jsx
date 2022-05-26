import React from 'react'
import module from './MessagesPage.module.css'
import Messages from './Messages/Messages.jsx'
import Chats from './Chats/Chats.jsx'
import ReduxAddMessageForm from './AddMessageForm'

const MessagesPage = (props) => {
  let sendMessage = (values) => {
    props.sendMessage(values.newMessageBody);
  }

  return (
    <div className={module.messagesPage}>
      <Chats state={props.state.messagesPage}/>
      <Messages state={props.state.messagesPage}/>

      <ReduxAddMessageForm onSubmit={sendMessage}/>
    </div>
  )
}

export default MessagesPage
