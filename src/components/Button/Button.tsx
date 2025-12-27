import styles from "./styles.module.css";
import {ButtonProps} from './Button.props';

const Button = ({ onClick, children }: ButtonProps) => {
    return (
        <button className={styles.button} onClick={onClick}>
            {children}
        </button>
    );
};

export default Button;
