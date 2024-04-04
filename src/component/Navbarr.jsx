import { useState } from "react";
import { motion } from "framer-motion";

const Navbarr = () => {
	const navLinksData = [
		{ id: 1, title: "Projects", url: "/projects" },
		{ id: 2, title: "About", url: "/#about" },
		{ id: 3, title: "Contact", url: "/#contact" },
	];

	

	const [isHovered, setIsHovered] = useState(false);

	return (
		<nav>
			<div className='flex'>
				<ul className='flex w-full flex-row md:gap-8 gap-4 overflow-hidden relative'>
					{navLinksData.map((link, index) => (
						<motion.li
							key={link.id}
							onMouseOver={() => setIsHovered(index)}
							onMouseOut={() => setIsHovered(null)}
							className='font-Source text-black text-sm sm:text-base sm:leading-4 leading-3 flex justify-center items-center tracking-tighter relative w-full p-0 '
						>
							<a href={link.url} className='flex text-black'>
								<motion.span
									initial={{ y: "0%" }}
									animate={{ y: isHovered === index ? "150%" : "0%" }}
									transition={{
										duration: 0.3,
									}}
								>
									{link.title}
								</motion.span>
							</a>
							<a href={link.url} className='absolute flex'>
								<motion.span
									initial={{ y: "-200%" }}
									animate={{ y: isHovered === index ? "0%" : "-100%" }}
									transition={{
										duration: 0.3,
									}}
									className='text-blacky'
								>
									{link.title}
								</motion.span>
							</a>
						</motion.li>
					))}
				</ul>
			</div>
		</nav>
	);
};

export default Navbarr;
