import { createContext, Dispatch, SetStateAction, RefObject } from "react";

export interface UserContextType {
	currentUserName: string;
	setCurrentUserName: Dispatch<SetStateAction<string>>;
	isLogined: boolean;
	setIsLogined: Dispatch<SetStateAction<boolean>>;
	loginRef: RefObject<HTMLInputElement>;
}

const defaultContextValue: UserContextType = {
	currentUserName: "",
	setCurrentUserName: () => {},
	isLogined: false,
	setIsLogined: () => {},
	loginRef: {},
};

export const UserContext = createContext<UserContextType>(defaultContextValue);
