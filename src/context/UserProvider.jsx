import { useState, useEffect } from "react";
import { UserContext } from "./UserContext";
import useProfile from "../hooks/useProfile";

export const UserProvider = ({ children }) => {
    const [currentUserName, setCurrentUserName] = useState("");
    const [isLogined, setIsLogined] = useState(false);
    const [, , profiles] = useProfile();

    useEffect(() => {
        (profiles || []).forEach((profile) => {
            if (profile.isLogined) {
                setIsLogined(true);
                setCurrentUserName(profile.name);
            }
        });
    }, [profiles]);

    return (
        <UserContext.Provider
            value={{
                currentUserName,
                setCurrentUserName,
                isLogined,
                setIsLogined,
            }}
        >
            {children}
        </UserContext.Provider>
    );
};
