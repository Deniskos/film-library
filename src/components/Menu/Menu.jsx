import { useContext } from "react";
import cn from "classnames";
import styles from "./styles.module.css";
import { UserContext } from "../../context/UserContext";

const Menu = ({ exitHandler, loginRef }) => {
    const { currentUserName, isLogined } = useContext(UserContext);
    const clickHandler = (e) => {
        e.preventDefault();
        if (isLogined) {
            exitHandler();
        } else {
            loginRef?.current.focus();
        }
    };
    return (
        <menu className={styles.navigation}>
            <nav className={styles.nav}>
                <ul className={styles["nav-list"]}>
                    <li className={styles["nav-item"]}>
                        <a href="/" className={styles["nav-link"]}>
                            Поиск фильмов
                        </a>
                    </li>
                    <li className={styles["nav-item"]}>
                        <a href="/about" className={styles["nav-link"]}>
                            Мои фильмы
                        </a>
                    </li>
                    {isLogined && (
                        <li
                            className={cn(
                                styles["nav-item"],
                                styles["nav-item__name"]
                            )}
                        >
                            <a href="/profile" className={styles["nav-link"]}>
                                {currentUserName}
                            </a>
                        </li>
                    )}
                    <li className={styles["nav-item"]}>
                        <a
                            href="/services"
                            onClick={clickHandler}
                            className={cn(styles["nav-link"], {
                                [styles["nav-link__login"]]: !isLogined,
                            })}
                        >
                            {isLogined ? "Выйти" : "Войти"}
                        </a>
                    </li>
                </ul>
            </nav>
        </menu>
    );
};

export default Menu;
