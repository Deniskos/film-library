import cn from "classnames";
import styles from "./styles.module.css";
import { TitleProps } from "./Title.props";

const Title = ({ size = "h1", children }: TitleProps) => {
	if (size === "h2") {
		return <h2 className={cn(styles.title, styles.middle)}>{children}</h2>;
	}
	if (size === "h3") {
		return <h3 className={cn(styles.title, styles.small)}>{children}</h3>;
	}
	return <h1 className={cn(styles.title, styles.big)}>{children}</h1>;
};

export default Title;
