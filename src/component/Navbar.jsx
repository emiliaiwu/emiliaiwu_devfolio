import { NavLink } from "react-router-dom";
import Hamburger from "./Hamburger";

const Navbar = () => {
	const navLinksData = [
		{ id: 2, title: "About", url: "#about" },
		{ id: 2, title: "Projects", url: "#my-projects" },
		{ id: 3, title: "Contact", url: "#contact" },
	];

	return (
		<nav>
			<div className='hidden md:flex'>
				<ul className='flex w-full flex-row gap-3'>
					{navLinksData.map((link) => (
						<li
							key={link.id}
							className='font-IvyOra text-beige text-base py-2 px-4 flex flex-row items-center gap-2 font-bold tracking-wider'
						>
							<div className='bg-beige w-2 h-2 rounded-full '></div>
							<NavLink>{link.title}</NavLink>
						</li>
					))}
				</ul>
			</div>
			<div className='md:hidden'>
				<button className='text-lg  font-Source flex flex-row items-center gap-2 font-light'>
					{/* <div className='bg-beige w-2 h-2 rounded-full'></div> Menu */}
					<Hamburger />
				</button>
			</div>
		</nav>
	);
};

export default Navbar;
