import { useState, useEffect, ReactNode, useRef, RefObject } from "react";
import { UserContext } from "./UserContext";
import useProfile from "../hooks/useProfile";

interface UserProviderType {
        children: ReactNode;
}

export const UserProvider = ({ children }: UserProviderType) => {
    const [currentUserName, setCurrentUserName] = useState<string>("");
    const [isLogined, setIsLogined] = useState<boolean>(false);
    const [, , profiles]= useProfile();
    const loginRef = useRef<HTMLInputElement>();

    useEffect(() => {
        // Проверяем, что profiles является массивом
        if (Array.isArray(profiles)) {
                 (profiles || []).forEach((profile) => {
                        if (profile.isLogined) {
                                setIsLogined(true);
                                setCurrentUserName(profile.name);
                        }
                });
        }
        // Если profiles - функция, ничего не делаем       
    }, [profiles]);

    return (
        <UserContext.Provider
            value={{
                currentUserName,
                setCurrentUserName,
                isLogined,
                setIsLogined,
                loginRef,
            }}
        >
            {children}
        </UserContext.Provider>
    );
};
