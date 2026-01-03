import  { forwardRef } from 'react';
import cn from "classnames";
import styles from "./styles.module.css";

import {InputProps} from './Input.props';

const Input = forwardRef<HTMLInputElement, InputProps>(
        ({ value, className = "", iconName, ...props }, ref) => {
        return (
                <div className={styles["input-root"]}>
                        <input
                                ref={ref}
                                {...props}
                                value={value}
                                className={cn(styles.input, className, {
                                        [styles.withIcon]: iconName,
                                })}
                        />
                        {iconName && (
                                <img
                                        className={styles.icon}
                                        src={`/${iconName}`}
                                />
                        )}
                </div>
        )}
); 


export default Input;
