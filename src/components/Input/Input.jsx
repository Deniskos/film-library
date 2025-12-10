import "./styles.css";

const Input = ({ placeholder, className = "", iconName }) => {
    return (
        <div className="input-root">
            <input
                type="search"
                className={`input ${className} ${iconName ? "whitchIcon" : ""}`}
                placeholder={placeholder}
            />
            {iconName && <img className="input__icon" src={`/${iconName}`} />}
        </div>
    );
};

export default Input;
