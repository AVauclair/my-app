import module from './Navigation.module.css';

const Navigation = (props) => {
    return (
        <nav className = {module.nav}>
          <ul className = {module.nav}>
            <li className = {module.item}><a>My Page</a></li>
            <li className = {module.item}><a>News</a></li>
            <li className = {module.item}><a>Messages</a></li>
            <li className = {module.item}><a>Friends</a></li>
            <li className = {module.item}><a>Music</a></li>
            <li className = {module.item}><a>Settings</a></li>
          </ul>
      </nav>
    );
}

export default Navigation;