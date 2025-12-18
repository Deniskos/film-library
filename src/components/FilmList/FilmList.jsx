import React from "react";

import FilmItem from "../FilmItem/FilmItem";

import styles from "./styles.module.css";

const FilmList = ({ films }) => {
    if (films.length < 1) {
        return null;
    }

    return (
        <div className={styles.films}>
            <ul className={styles["films__list"]}>
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
