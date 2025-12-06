import "./styles.css";

const Menu = () => {
    return (
        <menu className="navigation">
            <nav class="nav">
                <ul class="nav-list">
                    <li class="nav-item">
                        <a href="/" class="nav-link">
                            Поиск фильмов
                        </a>
                    </li>
                    <li class="nav-item">
                        <a href="/about" class="nav-link">
                            Мои фильмы
                        </a>
                    </li>
                    <li class="nav-item">
                        <a href="/services" class="nav-link">
                            Войти
                        </a>
                    </li>
                </ul>
            </nav>
        </menu>
    );
};

export default Menu;
