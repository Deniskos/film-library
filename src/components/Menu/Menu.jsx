import styles from "./styles.module.css";

const Menu = () => {
    return (
        <menu className={styles.navigation}>
            <nav className={styles.nav}>
                <ul className={styles["nav - list"]}>
                    <li className={styles["nav-item"]}>
                        <a href="/" className={styles["nav-link"]}>
                            Поиск фильмов
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="/about" className={styles["nav-link"]}>
                            Мои фильмы
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="/services" className={styles["nav-link"]}>
                            Войти
                        </a>
                    </li>
                </ul>
            </nav>
        </menu>
    );
};

export default Menu;
