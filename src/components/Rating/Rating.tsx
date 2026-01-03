import cn from "classnames";
import styles from "./styles.module.css";

interface RatingProps {
	position: "absolute" | "static";
	rating: number;
}

const Rating = ({ rating, position = "static" }: RatingProps) => {
	return (
		<span className={cn(styles["likes"], styles[position])}>
			<img src="/star.svg" alt="Иконка звезды" />
			&nbsp;
			{rating}
		</span>
	);
};

export default Rating;
