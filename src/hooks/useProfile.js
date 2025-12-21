import { useState } from "react";

const useProfile = () => {
    const [profiles, setProfiles] = useState(() => {
        return JSON.parse(localStorage.getItem("Профили")) || [];
    });

    const exitProfile = (name) => {        
        const newProfiles = profiles.map((profile) => {
            if (profile.name === name) {
                return {...profile, isLogined: false}
            }
            return profile;
        } )
        localStorage.setItem("Профили", JSON.stringify(newProfiles));
        setProfiles(newProfiles);
    };

    const loginProfile = (name) => {
        // Проверяем, есть ли пользователь с таким именем
        const profileIndex = profiles.findIndex(profile => profile.name === name);
        // Пользователя нет - добавляем нового
        if (profileIndex === -1) {
             const newProfile = { name, isLogined: true };
             try {
                localStorage.setItem("Профили", JSON.stringify([...profiles,  newProfile]));
                setProfiles([...profiles, newProfile]);
            } catch (e) {
                console.error(e);
            }             
        } else {
            const newProfiles = profiles.map((profile, index) => index === profileIndex ? { ...profile, isLogined: true } : profile);
            try {
                localStorage.setItem("Профили", JSON.stringify(newProfiles));
                setProfiles(newProfiles);
            } catch (e) {
                console.error(e);
            }
        }
    };

    return [loginProfile, exitProfile, profiles];
};

export default useProfile;