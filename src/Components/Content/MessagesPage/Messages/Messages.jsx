import module from './Messages.module.css'
import Message from './Message/Message.jsx'

const Messages = (props) => {
  return (
    <div className={module.messages}>
      <Message text="Bonsoirt Elliot" />
      <Message text="Huba-buba" />
      <Message text="WHO WANTS TO LIVE FOREVER" />
    </div>
  )
}

export default Messages
