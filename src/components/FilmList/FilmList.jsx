import FilmItem from "../FilmItem/FilmItem";

import "./styles.css";

const FilmList = ({ films }) => {
    console.log(films.lenght);
    if (films.length < 1) {
        return null;
    }

    return (
        <div className="films">
            <ul className="films__list">
                {films.map((film) => (
                    <FilmItem film={film} />
                ))}
            </ul>
        </div>
    );
};

export default FilmList;
