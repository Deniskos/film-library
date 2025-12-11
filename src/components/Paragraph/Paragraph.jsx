import cn from "classnames";
import styles from "./styles.module.css";

const Paragraph = ({ size, children }) => {
    return <p className={cn(styles.paragraph, [size])}>{children}</p>;
};

export default Paragraph;
