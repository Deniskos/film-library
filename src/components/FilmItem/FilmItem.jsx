import "./styles.css";

const FilmItem = ({ film }) => {
    if (!film) {
        return null;
    }

    return (
        <li className="film-item">
            <span className="film-item__likes">{film.likes}</span>
            <div className="film-item__image-wrapper">
                <img src={`./src/assets/images/${film.poster}`} alt="" />
            </div>
            <h3 className="film-item__film-name">{film.name}</h3>
            <a
                href=""
                className={`film-item__favorit ${
                    film.isFavorit ? "film-item__favorit-added" : ""
                }`}
            >
                {film.isFavorit ? "В избранном" : "В избранное"}
            </a>
        </li>
    );
};

export default FilmItem;
