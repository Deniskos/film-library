import React, { useContext } from "react";
import cn from "classnames";
import styles from "./styles.module.css";
import { UserContext } from "../../context/UserContext";
import {MenuProps} from './Menu.props';
import { NavLink } from "react-router-dom";

const Menu = ({ exitHandler, loginRef}: MenuProps) => {
    const { currentUserName, isLogined } = useContext(UserContext);
    const clickHandler = (event: React.MouseEvent) => {
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
                        <NavLink to="/" className={({isActive}) => cn(styles["nav-link"], {
                                        [styles.active]: isActive
                                })}>
                            Поиск фильмов
                        </NavLink>
                    </li>
                    <li className={styles["nav-item"]}>
                        <NavLink to="/favorites" className={({isActive}) => cn(styles["nav-link"], {
                                [styles.active]: isActive,
                            })}>
                            Мои фильмы
                        </NavLink>
                    </li>
                    {isLogined && (
                        <li
                            className={cn(
                                styles["nav-item"],
                                styles["nav-item__name"]
                            )}
                        >
                            <NavLink className={({isActive}) => cn(styles["nav-link"], {
                                        [styles.active]: isActive
                                })} to={`/profile/${currentUserName}`}>{currentUserName}</NavLink>
                        </li>
                    )}
                    <li className={styles["nav-item"]}>
                        <NavLink 
                            to="/login"
                            onClick={clickHandler}
                            className={({isActive}) => cn(styles["nav-link"], {
                                [styles.active]: isActive,
                                [styles["nav-link__login"]]: !isLogined,
                            })}
                        >
                            {isLogined ? "Выйти" : "Войти"}
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </menu>
    );
}

export default Menu;
