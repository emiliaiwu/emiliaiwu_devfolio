import {
	createBrowserRouter,
	RouterProvider,
	Route,
	createRoutesFromElements,
} from "react-router-dom";
import Root from "./Root";
import LandingPage from "./pages/LandingPage";
import Casestudy from "./pages/Casestudy";
import Projects from "./pages/Projects";

const App = () => {
	const router = createBrowserRouter(
		createRoutesFromElements(
			<Route path='/' element={<Root />}>
				<Route index element={<LandingPage />} />
				<Route path='projects' element={<Projects />} />
				<Route path=':slug' element={<Casestudy />} />
			</Route>
		)
	);
	return <RouterProvider router={router} />;
};

export default App;
