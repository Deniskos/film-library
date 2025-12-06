import { useState } from "react";

import Button from "../Button/Button";
import Input from "../Input/Input";

import "./styles.css";

const Search = () => {
  const [isTrue, setIsTrue] = useState(false);
  return (
    <div className="search-root">
      <div>{isTrue.toString()}</div>
      <Input
        className="search-input"
        placeholder="Введите название"
        iconName="search-normal.svg"
      />
      <Button onClick={() => setIsTrue((prev) => !prev)}>Искать</Button>
    </div>
  );
};

export default Search;
