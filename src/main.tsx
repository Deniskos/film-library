import axios from "axios";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { API_KEY, API_URL } from "./constants.js";
import { UserProvider } from "./context/UserProvider.js";
import "./index.css";
import { Layout } from "./layout/layout";
import { Favorites } from "./pages/Favorites/Favorites";
import { Login } from "./pages/Login/Login";
import { Main } from "./pages/Main/Main";
import { Movie } from "./pages/Movie/Movie";
import { Profile } from "./pages/Profile/Profile";
// Получаем элемент
const rootElement: HTMLElement | null = document.getElementById("root");

// Проверяем, что элемент существует
if (rootElement === null) {
	throw new Error(
		'Root element not found. Make sure you have a div with id="root" in your index.html',
	);
}
// Создаем корень
const root = createRoot(rootElement);

export async function getFilm({ params }) {
	try {
		const response = await axios.get(
			`${API_URL}/?apikey=${API_KEY}&i=${params.id}`,
		);

		console.log("Успешный ответ:", response.data);
		return response.data;
	} catch (error) {
		console.log(error);
	}
}

const router = createBrowserRouter([
	{
		path: "/",
		element: <Layout />,
		children: [
			{
				path: "/",
				element: <Main />,
			},
			{
				path: "/login",
				element: <Login />,
			},
			{
				path: "/profile/:name",
				element: <Profile />,
			},
			{
				path: "/movie/:id",
				element: <Movie />,
				loader: getFilm,
			},
			{
				path: "/favorites",
				element: <Favorites />,
			},
		],
	},
]);

// Рендерим приложение
root.render(
	<StrictMode>
		<UserProvider>
			<RouterProvider router={router} />
		</UserProvider>
	</StrictMode>,
);
