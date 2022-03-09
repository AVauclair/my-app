import React from 'react'
import module from './MessagesPage.module.css'
import Messages from './Messages/Messages.jsx'
import Chats from './Chats/Chats.jsx'

const MessagesPage = (props) => {
  let newMessageElement = React.createRef();

  let sendMessage = () => {
    alert(props.state.messagesPage.messageText);
  }

  let onChangeMessageText = () => {
    let text = newMessageElement.current.value;
    props.dispatch({type: "UPDATE-MESSAGE-TEXT", currentMessageText: text});
  }

  return (
    <div className={module.messagesPage}>
      <Chats state={props.state.messagesPage}/>
      <Messages state={props.state.messagesPage}/>

      <textarea onChange={onChangeMessageText} ref={newMessageElement} value={props.state.messagesPage.messageText}/>
      <button onClick={sendMessage}/>
    </div>
  )
}

export default MessagesPage
