import "./styles.css";
import Menu from "../Menu/Menu";

const Header = () => {
    return (
        <header className="header__root">
            <div className="header__logo">
                <a href="/">
                    <img src="/logo.svg" />
                </a>
            </div>
            <Menu />
        </header>
    );
};

export default Header;
