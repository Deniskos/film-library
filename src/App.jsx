import Title from "./components/Title/Title";
import Paragraph from "./components/Paragraph/Paragraph";
import Search from "./components/Search/Search";
import Header from "./components/Header/Header";

function App() {
    return (
        <>
            <Header />
            <Title>Поиск</Title>
            <Paragraph size="regular">
                Введите название фильма, сериала или мультфильма для поиска и
                добавления в избранное.
            </Paragraph>
            <Search />
        </>
    );
}

export default App;
