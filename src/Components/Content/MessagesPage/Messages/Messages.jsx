import module from './Messages.module.css'
import Message from './Message/Message.jsx'

const Messages = (props) => {

  let messagesElements = props.state.messages.map(m => <Message text={m.text}/>)

  return (
    <div className={module.messages}>
      {messagesElements}
    </div>
  )
}

export default Messages
