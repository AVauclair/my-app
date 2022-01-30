import module from './Header.module.css';

const Header = (props) => {
    return (
    <header className = {module.header}>
      <img src="https://i.pinimg.com/originals/cc/7a/d3/cc7ad3d3ba4e80853304bee2dc3015da.png"/>
      Header
    </header>
    );
}

export default Header;