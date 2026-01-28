import {
	isRouteErrorResponse,
	useNavigate,
	useRouteError,
} from "react-router-dom";
import Button from "../../components/Button/Button";

import styles from "./styles.module.css";

export const ErrorPage = () => {
	const error = useRouteError();
	const navigate = useNavigate();

	if (isRouteErrorResponse(error)) {
		return (
			<div className={styles["error-page"]}>
				<h1>
					{error.status === 404
						? "Фильм не найден"
						: `Ошибка ${error.status}`}
				</h1>
				<p>{error?.data}</p>

				<div className={styles.actions}>
					<Button onClick={() => navigate(-1)}>
						Назад
					</Button>
					<Button onClick={() => navigate("/")}>
						На главную
					</Button>
				</div>
			</div>
		);
	}

	return <div className={styles["error-page"]}>Неизвестная ошибка.</div>;
};
