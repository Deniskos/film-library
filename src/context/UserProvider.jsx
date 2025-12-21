import { useState } from "react";
import { UserContext } from "./UserContext";

export const UserProvider = ({ children }) => {
    const [currentUserName, setCurrentUserName] = useState("");
    const [isLogined, setIsLogined] = useState(false);
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
