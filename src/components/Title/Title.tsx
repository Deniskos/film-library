import styles from "./styles.module.css";
import {TitleProps} from './Title.props';

const Title = ({ size = "h1", children }: TitleProps) => {
    if (size === "h2") {
        return <h2 className={styles.title}>{children}</h2>;
    }
    return <h1 className={styles.title}>{children}</h1>;
};

export default Title;
