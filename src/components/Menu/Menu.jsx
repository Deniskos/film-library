import "./styles.css";

const Menu = () => {
    return (
        <menu className="navigation">
            <nav className="nav">
                <ul className="nav-list">
                    <li className="nav-item">
                        <a href="/" className="nav-link">
                            Поиск фильмов
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="/about" className="nav-link">
                            Мои фильмы
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="/services" className="nav-link">
                            Войти
                        </a>
                    </li>
                </ul>
            </nav>
        </menu>
    );
};

export default Menu;
