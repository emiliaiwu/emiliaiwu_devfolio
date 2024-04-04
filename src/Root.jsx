import { Outlet } from "react-router";
import Headerr from "./component/Headerr";
import Footer from "./component/Footer";

const Root = () => {
	return (
		<div className='root'>
			<Headerr />
			<Outlet />
			<Footer />
		</div>
	);
};

export default Root;
