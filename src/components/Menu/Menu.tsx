import React, { useContext, forwardRef, ReactNode } from "react";
import cn from "classnames";
import styles from "./styles.module.css";
import { UserContext } from "../../context/UserContext";
import {MenuProps} from './Menu.props';

const Menu = ({ exitHandler, loginRef}: MenuProps) => {
    const { currentUserName, isLogined } = useContext(UserContext);
    const clickHandler = (event: React.MouseEvent) => {
        event.preventDefault();
        if (isLogined) {
            exitHandler();
        } else {
            loginRef.current?.focus();
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
}

export default Menu;
