import { useState } from "react";

import Button from "../Button/Button";
import Input from "../Input/Input";

import styles from "./styles.module.css";

const Search = () => {
    const [isTrue, setIsTrue] = useState(false);
    return (
        <div className={styles["root"]}>
            <div>{isTrue.toString()}</div>
            <Input
                type="search"
                name="search"
                className={styles["search"]}
                placeholder="Введите название"
                iconName="search-normal.svg"
            />
            <Button onClick={() => setIsTrue((prev) => !prev)}>Искать</Button>
        </div>
    );
};

export default Search;
