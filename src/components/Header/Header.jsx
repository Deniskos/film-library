import styles from "./styles.module.css";
import Menu from "../Menu/Menu";

const Header = ({ ...props }) => {
    return (
        <header className={styles["header__root"]}>
            <div className={styles["header__logo"]}>
                <a href="/">
                    <img src="/logo.svg" />
                </a>
            </div>
            <Menu {...props} />
        </header>
    );
};

export default Header;
