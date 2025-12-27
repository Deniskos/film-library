import { createContext, Dispatch, SetStateAction } from "react";

export interface UserContextType {
        currentUserName: string;
        setCurrentUserName: Dispatch<SetStateAction<string>>;
        isLogined: boolean;
        setIsLogined: Dispatch<SetStateAction<boolean>>;
}

const defaultContextValue: UserContextType = {
    currentUserName: "",
    setCurrentUserName: () => {}, 
    isLogined: false,
    setIsLogined: () => {}, 
};

export const UserContext = createContext<UserContextType>(defaultContextValue);
