import cn from "classnames";
import styles from "./styles.module.css";

interface FavoriteProps {
	isFavorit: boolean;
}

const Favorite = ({ isFavorit }: FavoriteProps) => {
	return (
		<a
			href=""
			className={cn(styles.favorit, {
				[styles["favorit-added"]]: isFavorit,
			})}
		>
			{isFavorit ? "В избранном" : "В избранное"}
		</a>
	);
};

export default Favorite;
