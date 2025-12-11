import styles from "./styles.module.css";

const Button = ({ onClick, children }) => {
    return (
        <button className={styles.button} onClick={onClick}>
            {children}
        </button>
    );
};

export default Button;
