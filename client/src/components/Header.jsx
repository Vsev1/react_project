import NavMenu from "./NavMenu.jsx";
import {useCallback, useState} from "react";
import { Link } from "react-router-dom";
import Popup from "./Popup.jsx";
function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const openMenu = () => {
        setIsOpen(true);
    };

    const closeMenu = () => {
        setIsOpen(false);
    };


    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const openPopup = () => {
        setIsPopupOpen(true);
    };

    const closePopup = useCallback(() => {
        setIsPopupOpen(false);
    }, []);

    return (
        <header className="absolute top-0 left-0 w-full z-50">
            <div className="container">
                <div className="header__content flex flex-row justify-between items-center">
                    <Link to="/" className="header__logo flex items-center">
                        <p>Logo</p>
                    </Link>
                    <div className="hidden lg:block">
                        <NavMenu/>
                    </div>
                    <div className="header__contacts-us hidden lg:flex">
                        <button type="button" className="btn" onClick={openPopup}>
                            Зв'язатися з нами
                        </button>
                    </div>
                    <div className="header__burger flex flex-col justify-between lg:hidden" onClick={openMenu}>
                        <span></span><span></span><span></span>
                    </div>
                </div>
                <div className={`header__mobile ${isOpen ? "active" : ""}`}>
                    <div className="container">
                        <div className="overlay"></div>
                        <div className="header__mobile-content">
                            <div className="header__mobile-top flex items-center justify-between">
                                <div className="header__mobile-logo">
                                    Logo
                                </div>
                                <div className="close__burger cursor-pointer" onClick={closeMenu}>
                                    <span></span><span></span>
                                </div>
                            </div>
                            <NavMenu onClick={closeMenu}/>
                        </div>
                    </div>
                </div>
                <Popup isOpen={isPopupOpen}
                       closePopup={closePopup}
                />
            </div>
        </header>
    );
}

export default Header;