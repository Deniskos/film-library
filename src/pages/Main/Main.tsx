import { useState } from "react";
import { Film } from "../../components/FilmItem/interface";
import FilmList from "../../components/FilmList/FilmList";
import Paragraph from "../../components/Paragraph/Paragraph";
import Search from "../../components/Search/Search";
import Title from "../../components/Title/Title";

import styles from "./styles.module.css";

// const filmsList = [
// 	{
// 		name: "Black Widow",
// 		poster: "black_widow.png",
// 		likes: 324,
// 		isFavorit: false,
// 	},
// 	{
// 		name: "Shang Chi",
// 		poster: "shang_chi.png",
// 		likes: 124,
// 		isFavorit: false,
// 	},
// 	{
// 		name: "Loki",
// 		poster: "loki.png",
// 		likes: 235,
// 		isFavorit: false,
// 	},
// 	{
// 		name: "How I Met Your Mother",
// 		poster: "How_I_Met_Your_Mother.png",
// 		likes: 123,
// 		isFavorit: false,
// 	},
// 	{
// 		name: "Money Heist",
// 		poster: "Money_Heist.png",
// 		likes: 8125,
// 		isFavorit: true,
// 	},
// 	{
// 		name: "Friends",
// 		poster: "Friends.png",
// 		likes: 123,
// 		isFavorit: false,
// 	},
// 	{
// 		name: "The Big Bang Theory",
// 		poster: "The_Big_Bang_Theory.png",
// 		likes: 12,
// 		isFavorit: false,
// 	},
// 	{
// 		name: "Two And a Half Men",
// 		poster: "Two_And_a_Half_Men.png",
// 		likes: 456,
// 		isFavorit: false,
// 	},
// ];

export const Main = () => {
	const [filmsList, setFilmList] = useState<Film[]>([]);
	return (
		<div className={styles["main-page"]}>
			<div className={styles["search-head"]}>
				<Title>Поиск</Title>
				<Paragraph size="regular">
					Введите название фильма, сериала или
					мультфильма для поиска и добавления в
					избранное.
				</Paragraph>
			</div>
			<Search setFilmList={setFilmList} />
			<FilmList films={filmsList} />
		</div>
	);
};
