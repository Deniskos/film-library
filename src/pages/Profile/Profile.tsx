import { useParams } from "react-router-dom";
import styles from "./styles.module.css";

export const Profile = () => {
	const { name } = useParams();

	return <div className={styles["profile-root"]}>Профайл {name}</div>;
};
