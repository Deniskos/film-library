import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.js";
import { UserProvider } from "./context/UserProvider.js";

// Получаем элемент
const rootElement: HTMLElement | null = document.getElementById('root');

// Проверяем, что элемент существует
if (rootElement === null) {
  throw new Error(
    'Root element not found. Make sure you have a div with id="root" in your index.html'
  );
}

// Создаем корень
const root = createRoot(rootElement);

// Рендерим приложение
root.render(
  <StrictMode>
        <UserProvider>
            <App />
        </UserProvider>
    </StrictMode>
);
