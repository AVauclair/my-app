import module from './Chats.module.css'
import Chat from './Chat/Chat.jsx'

const Chats = (props) => {
  return (
    <div className={module.chats}>
      <nav className={module.chatsNav}>
        <ul className={module.chatsNav}>
          <Chat name="Oleg" id="1" />
          <Chat name="Ilya" id="2" />
          <Chat name="Vlad" id="3" />
          <Chat name="Danil" id="4" />
          <Chat name="Kirill" id="5" />
        </ul>
      </nav>
    </div>
  )
}

export default Chats
