import Title from "./components/Title/Title";
import Paragraph from "./components/Paragraph/Paragraph";
import Search from "./components/Search/Search";

function App() {
  return (
    <>
      <Title>Поиск</Title>
      <Paragraph size="regular">
        Введите название фильма, сериала или мультфильма для поиска и добавления
        в избранное.
      </Paragraph>
      <Search />
    </>
  );
}

export default App;
