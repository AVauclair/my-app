import React from 'react'
import module from './MessagesPage.module.css'
import Messages from './Messages/Messages.jsx'
import Chats from './Chats/Chats.jsx'

const MessagesPage = (props) => {
  let newMessageElement = React.createRef();

  let sendMessage = () => {
    let text = newMessageElement.current.value;
    props.sendMessage(text);
  }

  let onChangeMessageText = () => {
    let text = newMessageElement.current.value;
    props.changeMessageText(text)
  }
debugger
  return (
    <div className={module.messagesPage}>
      <Chats state={props.state.messagesPage}/>
      <Messages state={props.state.messagesPage}/>

      <textarea onChange={onChangeMessageText} ref={newMessageElement} value={props.areaMessageText}/>
      <button onClick={sendMessage}/>
    </div>
  )
}

export default MessagesPage
