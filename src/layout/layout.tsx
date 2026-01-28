import { useContext, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import { UserContext } from "../context/UserContext";
import useProfile from "../hooks/useProfile";

import styles from "./styles.module.css";

export const Layout = () => {
	const [loginProfile, exitProfile] = useProfile();

	const {
		profiles,
		currentUserName,
		setCurrentUserName,
		isLogined,
		setIsLogined,
		loginRef,
	} = useContext(UserContext);

	useEffect(() => {
		console.log("Профайл в layout", profiles);
	}, [profiles]);

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
