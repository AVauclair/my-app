import module from './Chat.module.css'
import { NavLink } from 'react-router-dom'

const Chat = (props) => {
  return (
    <div className={module.chat}>
      <li className={module.item}>
        <NavLink
          to={'/dialogs + {props.id}'}
          className={(navData) => (navData.isActive ? module.active : '')}
        >
          <img src = {props.avatar} className={module.avatar}/> {props.name}
        </NavLink>
      </li>
    </div>
  )
}

export default Chat
