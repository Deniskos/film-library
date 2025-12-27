import cn from "classnames";
import styles from "./styles.module.css";
import {ParagraphProps} from './Paragraph.props';

const Paragraph = ({ size, children }: ParagraphProps) => {
    return <p className={cn(styles.paragraph, [size])}>{children}</p>;
};

export default Paragraph;
