import cn from "classnames";
import styles from "./styles.module.css";

const Input = ({ value, className = "", iconName, ...props }) => {
    return (
        <div className={styles["input-root"]}>
            <input
                {...props}
                value={value}
                className={cn(styles.input, className, {
                    [styles.withIcon]: iconName,
                })}
            />
            {iconName && <img className={styles.icon} src={`/${iconName}`} />}
        </div>
    );
};

export default Input;
