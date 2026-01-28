import { useContext, useEffect, useState } from "react";
import { UserContext } from "../context/UserContext";

const useProfile = (): [
	loginProfile: (name: string) => void,
	exitProfile: (name: string) => void,
] => {
	const { profiles, setProfiles } = useContext(UserContext);

	const exitProfile = (name: string): void => {
		console.log("Выход из профиля: ", name);
		console.log("Текущее состояние профилей:", profiles);
		const newProfiles = profiles.map((profile) => {
			if (profile.name === name) {
				return { ...profile, isLogined: false };
			}
			return profile;
		});
		localStorage.setItem("Профили", JSON.stringify(newProfiles));
		setProfiles(newProfiles);
	};

	const loginProfile = (name: string): void => {
		console.log("Вход в профиль: ", name);
		console.log("Текущее состояние профилей:", profiles);
		// Проверяем, есть ли пользователь с таким именем
		const profileIndex = profiles.findIndex(
			(profile) => profile.name === name,
		);
		// Пользователя нет - добавляем нового
		if (profileIndex === -1) {
			const newProfile = { name, isLogined: true };
			try {
				localStorage.setItem(
					"Профили",
					JSON.stringify([
						...profiles,
						newProfile,
					]),
				);
				console.log(
					"Добавление нового профиля:",
					newProfile,
				);
				setProfiles([...profiles, newProfile]);
			} catch (e) {
				console.error(e);
			}
		} else {
			const newProfiles = profiles.map((profile, index) =>
				index === profileIndex
					? { ...profile, isLogined: true }
					: profile,
			);
			try {
				localStorage.setItem(
					"Профили",
					JSON.stringify(newProfiles),
				);
				console.log(
					"Изменение существующего профиля:",
					newProfiles,
				);
				setProfiles(newProfiles);
			} catch (e) {
				console.error(e);
			}
		}
	};

	return [loginProfile, exitProfile];
};

export default useProfile;
