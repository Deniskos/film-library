import Button from "./components/Button/Button";
import Title from "./components/Title/Title";
import Paragraph from "./components/Paragraph/Paragraph";

function App() {
  return (
    <>
      <Title>Поиск</Title>
      <Paragraph size="regular">
        Введите название фильма, сериала или мультфильма для поиска и добавления
        в избранное.
      </Paragraph>
      <Button>Искать</Button>
    </>
  );
}

export default App;
