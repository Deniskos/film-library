import cn from "classnames";
import styles from "./styles.module.css";

const Input = ({ placeholder, className = "", iconName }) => {
    return (
        <div className={styles["input-root"]}>
            <input
                type="search"
                className={cn(styles.input, className, {
                    [styles.withIcon]: iconName,
                })}
                placeholder={placeholder}
            />
            {iconName && <img className={styles.icon} src={`/${iconName}`} />}
        </div>
    );
};

export default Input;
