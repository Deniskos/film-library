import { ButtonHTMLAttributes, ReactNode, MouseEvent } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
        children: ReactNode;
        onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
}