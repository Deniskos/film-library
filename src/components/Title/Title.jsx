import styles from "./styles.module.css";

const Title = ({ size = "h1", children }) => {
    if (size === "h2") {
        return <h2 className={styles.title}>{children}</h2>;
    }
    return <h1 className={styles.title}>{children}</h1>;
};

export default Title;
