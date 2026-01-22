import cn from "classnames";
import { useLoaderData } from "react-router-dom";
import Favorite from "../../components/Favorite/Favorite";
import Rating from "../../components/Rating/Rating";
import Title from "../../components/Title/Title";
import { MovieData, MovieInfoItem } from "../../interfaces";

import styles from "./styles.module.css";

export const Movie = () => {
	const filmData = useLoaderData() as MovieData | null;
	if (!filmData) {
		return <div className={styles["loading"]}>Загрузка...</div>;
	}
	const movieInfo: MovieInfoItem[] = [
		{
			title: "Тип",
			desc: filmData.Type || "Не указано",
		},
		{
			title: "Дата выхода",
			desc: filmData.Released || "Не указана",
		},
		{
			title: "Бюджет",
			desc: filmData.BoxOffice || "Не указан",
		},
		{
			title: "Длительность",
			desc: filmData.Runtime || "Не указана",
		},
		{
			title: "Жанр",
			desc: filmData.Genre || "Не указан",
		},
		{
			title: "Актеры",
			desc: filmData.Actors || "Не указаны",
		},
	];

	return (
		<div className={styles["movie-root"]}>
			<div className={styles["text-wrapper"]}>
				<p className={styles["upper-title"]}>
					Поиск фильмов
				</p>
				<Title size="h2">{filmData.Title}</Title>
			</div>
			<div className={styles["main"]}>
				<div
					className={cn(
						styles["col"],
						styles["poster"],
					)}
				>
					<img src={filmData.Poster} />
				</div>
				<div
					className={cn(
						styles["col"],
						styles["description"],
					)}
				>
					<div
						className={
							styles[
								"text-description"
							]
						}
					>
						{filmData.Plot ||
							"Описание отсутствует"}
					</div>
					<div
						className={cn(
							styles["movie-actions"],
						)}
					>
						<Rating
							position="static"
							rating={
								filmData.imdbRating
							}
						/>
						<Favorite isFavorit={false} />
					</div>

					<ul className={styles["movie-info"]}>
						{movieInfo.map((movie) => (
							<li
								className={
									styles[
										"info-item"
									]
								}
							>
								<span
									className={
										styles[
											"info-title"
										]
									}
								>
									{
										movie.title
									}
								</span>
								<span
									className={
										styles[
											"info-description"
										]
									}
								>
									{
										movie.desc
									}
								</span>
							</li>
						))}
					</ul>
				</div>
			</div>

			{filmData.Awards && (
				<section className={styles["awards"]}>
					{" "}
					<div className={styles["text-wrapper"]}>
						<Title size="h3">Награды</Title>
						<div
							className={
								styles[
									"text-description"
								]
							}
						>
							{filmData.Awards}
						</div>
					</div>
				</section>
			)}
		</div>
	);
};
