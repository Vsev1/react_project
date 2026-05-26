import { Link } from 'react-router-dom';

function NavMenu({ onClick }) {
    return (
        <nav className="nav__menu">
            <Link to="/" onClick={onClick}>Головна</Link>
            <Link to="/about" onClick={onClick}>Про нас</Link>
            <Link to="/contacts" onClick={onClick}>Контакти</Link>
        </nav>
    );
}

export default NavMenu;