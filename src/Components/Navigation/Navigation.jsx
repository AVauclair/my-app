import module from './Navigation.module.css';
import {NavLink} from 'react-router-dom';

const Navigation = (props) => {
    return (
      <div className={module.navigationPage}>
        <nav className={module.nav}>
          <ul className={module.nav}>
            <li className={module.item}><NavLink to="/profile" className={navData => navData.isActive ? module.active : ''}>My Page</NavLink></li>
            <li className={module.item}><NavLink to="/news" className={navData => navData.isActive ? module.active : ''}>News</NavLink></li>
            <li className={module.item}><NavLink to="/messages" className={navData => navData.isActive ? module.active : ''}>Messages</NavLink></li>
            <li className={module.item}><NavLink to="/friends" className={navData => navData.isActive ? module.active : ''}>Friends</NavLink></li>
            <li className={module.item}><NavLink to="/audio" className={navData => navData.isActive ? module.active : ''}>Music</NavLink></li>
            <li className={module.item}><NavLink to="/settings" className={navData => navData.isActive ? module.active : ''}>Settings</NavLink></li>
          </ul>
        </nav>
      </div>
    );
}

export default Navigation;