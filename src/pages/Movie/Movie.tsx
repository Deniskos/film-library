import cn from "classnames";
import { useParams } from "react-router-dom";
import Favorite from "../../components/Favorite/Favorite";
import Rating from "../../components/Rating/Rating";
import Title from "../../components/Title/Title";
import styles from "./styles.module.css";

const movieInfo = [
	{
		title: "Тип",
		desc: "Movie",
	},
	{
		title: "Дата выхода",
		desc: "2019-04-24",
	},
	{
		title: "Длительность",
		desc: "181 мин",
	},
	{
		title: "Жанр",
		desc: "Adventure,  Science Fiction, Action",
	},
];

export const Movie = () => {
	const { id } = useParams();

	return (
		<div className={styles["movie-root"]}>
			<div className={styles["text-wrapper"]}>
				<p className={styles["upper-title"]}>
					Поиск фильмов
				</p>
				<Title size="h2">Avengers: Endgame</Title>
			</div>
			<div className={styles["main"]}>
				<div
					className={cn(
						styles["col"],
						styles["poster"]
					)}
				>
					<img src="/src/assets/images/Avengers.png" />
				</div>
				<div
					className={cn(
						styles["col"],
						styles["description"]
					)}
				>
					<div
						className={
							styles[
								"text-description"
							]
						}
					>
						After the devastating events of
						Avengers: Infinity War, the
						universe is in ruins due to the
						efforts of the Mad Titan,
						Thanos. With the help of
						remaining allies, the Avengers
						must assemble once more in order
						to undo Thanos' actions and
						restore order to the universe
						once and for all, no matter what
						consequences may be in store.
					</div>

					<div
						className={cn(
							styles["movie-actions"]
						)}
					>
						<Rating
							position="static"
							rating={8.5}
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

			<section className={styles["reviews"]}>
				<p className={styles["reviews-title"]}>
					Отзывы
				</p>
				<div className={styles["text-wrapper"]}>
					<Title size="h3">
						Not as good as infinity war..
					</Title>

					<div
						className={
							styles[
								"text-description"
							]
						}
					>
						But its a pretty good film. A
						bit of a mess in some parts,
						lacking the cohesive and
						effortless feel infinity war
						somehow managed to accomplish.
						Some silly plot holes and
						characters that could&apos;ve
						been cut (Ahem, captain marvel
						and thanos). The use of Captain
						marvel in this film was just
						ridiculous. Shes there at the
						start, bails for some reason?
						And then pops up at the end to
						serve no purpose but deux ex
						machina a space ship...
					</div>
				</div>
			</section>
		</div>
	);
};
