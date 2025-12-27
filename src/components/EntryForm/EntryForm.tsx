import React, { useState } from "react";
import useProfile from "../../hooks/useProfile";
import Button from "../Button/Button";
import Input from "../Input/Input";
import Title from "../Title/Title";

import styles from "./styles.module.css";

const EntryForm = () => {
    const [name, setName] = useState<string>("");
    const [addProfile, isLogined] = useProfile();

    const changeName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
    };

    const login = () => {
        if (!name) {
            return null;
        }
        addProfile(name);
    };

    return (
        <div className={styles.root}>
            <Title size="h2">Вход {isLogined}</Title>
            <Input
                type="text"
                value={name}
                onChange={changeName}
                name="auth"
                placeholder="Ваше имя"
            />
            <div>
                <Button onClick={login}>Войти в профиль</Button>
            </div>
        </div>
    );
};

export default EntryForm;
