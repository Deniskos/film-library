import styles from "./styles.module.css";
import Menu from "../Menu/Menu";
import {MenuProps} from '../Menu/Menu.props';

const Header = ({ ...props }: MenuProps) => {
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
