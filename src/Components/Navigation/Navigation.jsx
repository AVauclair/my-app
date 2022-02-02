import module from './Navigation.module.css';

const Navigation = (props) => {
    return (
        <nav className = {module.nav}>
          <ul className = {module.nav}>
            <li className = {module.item}><a href = "/profile">My Page</a></li>
            <li className = {module.item}><a href = "/news">News</a></li>
            <li className = {module.item}><a href = "/messages">Messages</a></li>
            <li className = {module.item}><a href = "/friends">Friends</a></li>
            <li className = {module.item}><a href = "/audio">Music</a></li>
            <li className = {module.item}><a href = "/settings">Settings</a></li>
          </ul>
      </nav>
    );
}

export default Navigation;