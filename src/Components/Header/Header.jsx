import module from './Header.module.css';
import {NavLink} from 'react-router-dom';

const Header = (props) => {
    return (
    <header className={module.headerPage}>
      <img src="https://i.pinimg.com/originals/cc/7a/d3/cc7ad3d3ba4e80853304bee2dc3015da.png"/>
      твой айди: { props.isAuth ? props.id : <NavLink to="/login">Login</NavLink> }
      {props.isAuth ? <button onClick={props.logout}>Logout</button> : null}
    </header>
    );
}

export default Header;