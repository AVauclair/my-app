import React from 'react'
import module from './MessagesPage.module.css'
import Messages from './Messages/Messages.jsx'
import Chats from './Chats/Chats.jsx'
import {updateMessageTextActionCreator, sendMessageActionCreator} from './../../../redux/reducers/messagesReducer'

const MessagesPage = (props) => {
  let newMessageElement = React.createRef();

  let sendMessage = () => {
    let text = newMessageElement.current.value;
    props.dispatch(sendMessageActionCreator(text))
  }

  let onChangeMessageText = () => {
    let text = newMessageElement.current.value;
    props.dispatch(updateMessageTextActionCreator(text));
  }

  return (
    <div className={module.messagesPage}>
      <Chats state={props.state.messagesPage}/>
      <Messages state={props.state.messagesPage}/>

      <textarea onChange={onChangeMessageText} ref={newMessageElement} value={props.state.messagesPage.areaMessageText}/>
      <button onClick={sendMessage}/>
    </div>
  )
}

export default MessagesPage
