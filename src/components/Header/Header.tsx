import styles from "./styles.module.css";
import Menu from "../Menu/Menu";
import {MenuProps} from '../Menu/Menu.props';
import { Link } from "react-router-dom";

const Header = ({ ...props }: MenuProps) => {
    return (
        <header className={styles["header__root"]}>
            <div className={styles["header__logo"]}>
                <Link to="/">
                    <img src="/logo.svg" />
                </Link>
            </div>
            <Menu {...props} />
        </header>
    );
};

export default Header;
