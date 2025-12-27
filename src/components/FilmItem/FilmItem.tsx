import cn from "classnames";
import styles from "./styles.module.css";
import {Film } from './interface'

interface FilmItemProps {
  film: Film;
}

const FilmItem = ({film}: FilmItemProps) => {

    if (!film) {
        return null;
    }

    return (
        <li className={styles["film-item"]}>
            <span className={styles["likes"]}>{film.likes}</span>
            <div className={styles["image-wrapper"]}>
                <img src={`./src/assets/images/${film.poster}`} alt="" />
            </div>
            <h3 className={styles["film-name"]}>{film.name}</h3>
            <a
                href=""
                className={cn(styles.favorit, {
                    [styles["favorit-added"]]: film.isFavorit,
                })}
            >
                {film.isFavorit ? "В избранном" : "В избранное"}
            </a>
        </li>
    );
};

export default FilmItem;
