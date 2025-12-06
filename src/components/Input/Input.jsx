import "./styles.css";

const Input = ({ placeholder, className = "", iconName }) => {
  return (
    <div className="input-root">
      <input
        type="search"
        className={`input ${className} ${iconName ? "whitchIcon" : ""}`}
        placeholder={placeholder}
      />
      {iconName && <img src={`/${iconName}`} />}
    </div>
  );
};

export default Input;
