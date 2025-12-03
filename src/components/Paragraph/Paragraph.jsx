import "./styles.css";

const Paragraph = ({ size, children }) => {
  return <p className={`paragraph ${size}`}>{children}</p>;
};

export default Paragraph;
