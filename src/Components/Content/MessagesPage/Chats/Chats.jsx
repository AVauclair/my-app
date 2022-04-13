import module from './Chats.module.css'
import Chat from './Chat/Chat.jsx'

const Chats = (props) => {
  let chatsElements = props.state.chats.map(c => <Chat avatar={c.avatar} name={c.name} id={c.id} key ={c.id}/>)

  return (
    <div className={module.chats}>
      <nav className={module.chatsNav}>
        <ul className={module.chatsNav}>
          {chatsElements}
        </ul>
      </nav>
    </div>
  )
}

export default Chats
