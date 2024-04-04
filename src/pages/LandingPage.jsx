import Aboutt from "../component/Aboutt";
import Contact from "../component/Contact";

import Heroo from "../component/Heroo";
import Projects from "../component/Projects";

const LandingPage = () => {
	window.scrollTo({ top: 0, behavior: "smooth" });
	return (
		<>
			<Heroo />
			<Projects />
			<Aboutt />
			<Contact />
		</>
	);
};

export default LandingPage;
