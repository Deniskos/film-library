import { createContext, Dispatch, RefObject, SetStateAction } from "react";
import { ProfileType } from "../interfaces";

export interface UserContextType {
	profiles: ProfileType[] | [];
	setProfiles: React.Dispatch<SetStateAction<ProfileType[]>>;
	currentUserName: string;
	setCurrentUserName: Dispatch<SetStateAction<string>>;
	isLogined: boolean;
	setIsLogined: Dispatch<SetStateAction<boolean>>;
	loginRef: RefObject<HTMLInputElement>;
}

const defaultContextValue: UserContextType = {
	profiles: [],
	setProfiles: () => {},
	currentUserName: "",
	setCurrentUserName: () => {},
	isLogined: false,
	setIsLogined: () => {},
	loginRef: {},
};

export const UserContext = createContext<UserContextType>(defaultContextValue);
