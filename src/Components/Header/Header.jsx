import module from './Header.module.css';
import {NavLink} from 'react-router-dom';
import logo from "../../images/logo.png"

const Header = (props) => {
    return (
    <header className={module.headerPage}>
      <img src = {logo}/>
      твой айди: { props.isAuth ? props.id : <NavLink to="/login">Login</NavLink> }
      {props.isAuth ? <button onClick={props.logout}>Logout</button> : null}
    </header>
    );
}

export default Header;