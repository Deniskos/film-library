import React, { useContext, useEffect, useRef, useState,  } from "react";
import useProfile from "./hooks/useProfile";

import Title from "./components/Title/Title";
import Paragraph from "./components/Paragraph/Paragraph";
import Search from "./components/Search/Search";
import Header from "./components/Header/Header";
import FilmList from "./components/FilmList/FilmList";

import Button from "./components/Button/Button";
import Input from "./components/Input/Input";
import { UserContext } from "./context/UserContext";

const filmsList = [
    {
        name: "Black Widow",
        poster: "black_widow.png",
        likes: 324,
        isFavorit: false,
    },
    {
        name: "Shang Chi",
        poster: "shang_chi.png",
        likes: 124,
        isFavorit: false,
    },
    {
        name: "Loki",
        poster: "loki.png",
        likes: 235,
        isFavorit: false,
    },
    {
        name: "How I Met Your Mother",
        poster: "How_I_Met_Your_Mother.png",
        likes: 123,
        isFavorit: false,
    },
    {
        name: "Money Heist",
        poster: "Money_Heist.png",
        likes: 8125,
        isFavorit: true,
    },
    {
        name: "Friends",
        poster: "Friends.png",
        likes: 123,
        isFavorit: false,
    },
    {
        name: "The Big Bang Theory",
        poster: "The_Big_Bang_Theory.png",
        likes: 12,
        isFavorit: false,
    },
    {
        name: "Two And a Half Men",
        poster: "Two_And_a_Half_Men.png",
        likes: 456,
        isFavorit: false,
    },
];

function App() {
    const { currentUserName, setCurrentUserName, isLogined, setIsLogined } =
        useContext(UserContext);
    const [loginProfile, exitProfile, profiles] = useProfile();
    const loginRef = useRef<HTMLInputElement>(null);

    const changeName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCurrentUserName(e.target.value);
    };

    const login = () => {
        if (!currentUserName) {
            return null;
        }
        loginProfile(currentUserName);
        setIsLogined(true);
    };

    const exitHandler = () => {
        exitProfile(currentUserName);
        setIsLogined(false);
        setCurrentUserName("");
    };

    return (
        <>
            <Header loginRef={loginRef} exitHandler={exitHandler} />
            <div className="app">
                <Title>Поиск</Title>
                <Paragraph size="regular">
                    Введите название фильма, сериала или мультфильма для поиска
                    и добавления в избранное.
                </Paragraph>
                <Search />
                <FilmList films={filmsList} />
                {!isLogined && (
                    <div className="loginForm">
                        <Title size="h2">Вход</Title>
                        <Input
                            ref={loginRef}
                            type="text"
                            value={currentUserName}
                            onChange={changeName}
                            name="auth"
                            placeholder="Ваше имя"
                        />
                        <div>
                            <Button onClick={login}>Войти в профиль</Button>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}

export default App;
