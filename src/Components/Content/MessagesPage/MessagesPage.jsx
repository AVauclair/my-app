import module from './MessagesPage.module.css'
import Messages from './Messages/Messages.jsx'
import Chats from './Chats/Chats.jsx'

const MessagesPage = (props) => {
  return (
    <div className={module.messagesPage}>
      <Chats state={props.state.messagesPage}/>
      <Messages state={props.state.messagesPage}/>
    </div>
  )
}

export default MessagesPage
