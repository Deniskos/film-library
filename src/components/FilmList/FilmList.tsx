import React from "react";

import FilmItem from "../FilmItem/FilmItem";
import { Film } from "../FilmItem/interface";

import styles from "./styles.module.css";

interface FilmListProps {
	films: Film[] | [];
}

const FilmList = ({ films }: FilmListProps) => {
	console.log(films);

	if (films.length < 1) {
		return null;
	}

	return (
		<div className={styles.films}>
			<ul className={styles["films__list"]}>
				{films.map(film => (
					<React.Fragment key={`${film.title} ${film.poster}`}>
						<FilmItem film={film} />
					</React.Fragment>
				))}
			</ul>
		</div>
	);
};

export default FilmList;
