import cn from "classnames";
import styles from "./styles.module.css";

interface FavoriteProps {
	isFavorite: boolean;
}

const Favorite = ({ isFavorite }: FavoriteProps) => {
	return (
		<a
			href=""
			className={cn(styles.favorit, {
				[styles["favorit-added"]]: isFavorite,
			})}
		>
			{isFavorite ? "В избранном" : "В избранное"}
		</a>
	);
};

export default Favorite;
