import React from "react";

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
                    <React.Fragment key={`${film.names} ${film.poster}`}>
                        <FilmItem film={film} />
                    </React.Fragment>
                ))}
            </ul>
        </div>
    );
};

export default FilmList;
