import {Link} from "react-router-dom";

function Footer() {
    return (
        <footer>
            <div className="container">
                <div className="footer__content flex items-center justify-between">
                    <Link to="/" className="footer__logo flex items-center">
                        <p>Logo</p>
                    </Link>
                    <p className="footer_rights">© Copyright 2026. Усі права захищені.</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;