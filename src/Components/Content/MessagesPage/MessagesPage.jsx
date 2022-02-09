import module from './MessagesPage.module.css'
import Messages from './Messages/Messages.jsx'
import Chats from './Chats/Chats.jsx'

const MessagesPage = (props) => {
  return (
    <div className={module.messagesPage}>
      <Chats />
      <Messages />
    </div>
  )
}

export default MessagesPage
