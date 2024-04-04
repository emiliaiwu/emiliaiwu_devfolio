import { Link } from "react-router-dom";
import Navbarr from "./Navbarr";
import { useState } from "react";

const Headerr = () => {
	const [isHovered, setIsHovered] = useState(false);
	return (
		<header className='sm:h-20 h-16 fixed top-0 left-0 right-0 flex justify-center items-center z-[100] bg-lightBeige bg-clip-border text-black '>
			<div className='flex flex-row items-center justify-between w-full h-full px-4 xs:px-4 max-w-[1600px] '>
				<h1
					onMouseOver={() => setIsHovered(true)}
					onMouseOut={() => setIsHovered(false)}
					className='font-Source tracking-tighter xs:text-xl font-semibold text-lg relative flex justify-center items-center overflow-hidden xs:leading-5'
				>
					<Link
						className={`${
							isHovered ? "translate-y-full" : "translate-y-0"
						}  transition-all duration-300`}
						to={"/"}
					>
						Emilia Iwu.
					</Link>
					<Link
						className={`${
							isHovered ? "translate-y-0" : "-translate-y-full"
						} text-blacky transition-all duration-300 absolute flex`}
						to={"/"}
					>
						Emilia Iwu.
					</Link>
				</h1>
				<Navbarr />
				<div className='md:flex flex-row items-center gap-3 hidden  '>
					<div className='bg-green-600 circle2'></div>
					<p className='font-Source  text-base tracking-tighter '>
						Available for work
					</p>
				</div>
			</div>
		</header>
	);
};

export default Headerr;
