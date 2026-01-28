import cn from "classnames";
import styles from "./styles.module.css";

const NotFound = () => {
	return (
		<div className={cn(styles["not-found-root"])}>
			<div className={cn(styles["title"])}>Упс... Ничего не найдено</div>
			<p className={cn(styles["subtitle"])}>Попробуйте изменить запрос или ввести более точное название&nbsp;фильма</p>
		</div>
	);
};

export default NotFound;
