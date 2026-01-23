import { useContext } from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import { UserContext } from "../context/UserContext";
import useProfile from "../hooks/useProfile";

import styles from "./styles.module.css";

export const Layout = () => {
	const [loginProfile, exitProfile, profiles] = useProfile();

	const { currentUserName, setCurrentUserName, isLogined, setIsLogined, loginRef } = useContext(UserContext);

	const exitHandler = () => {
		exitProfile(currentUserName);
		setIsLogined(false);
		setCurrentUserName("");
	};
	return (
		<div className="layout">
			<Header loginRef={loginRef} exitHandler={exitHandler} />
			<section className={styles["content"]}>
				<Outlet />
			</section>
		</div>
	);
};
