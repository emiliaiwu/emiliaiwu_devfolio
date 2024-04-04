import { Link } from "react-router-dom";
import { motion} from "framer-motion";
import { socialLinks } from "../data/db";
import { useState } from "react";

const Socials = () => {
	const slideInAnimationVariants = (delay) => ({
		initial: {
			opacity: 0,
			y: 20,
		},
		animate: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 0.4,
				delay: delay,
			},
		},
	});

	const [isHovered, setIsHovered] = useState(false);

	return (
		<div className=' '>
			<motion.ul className='flex flex-row gap-5 items-center h-6 overflow-hidden w-full relative'>
				{socialLinks.map((link, index) => (
					<motion.li
						key={index}
						variants={slideInAnimationVariants(.5 + index * 0.2)}
						initial='initial'
						whileInView='animate'
						viewport={{ once: true }}
						onMouseOver={() => setIsHovered(index)}
						onMouseOut={() => setIsHovered(null)}
						className='text-black flex justify-center items-center h-full relative w-full'
					>
						<Link
							to={link.url}
							className='flex flex-row items-center uppercase gap-1 cursor-pointer overflow-hidden'
						>
							<motion.span
								initial={{ y: 0 }}
								animate={{ y: isHovered === index ? "200%" : "0%" }}
								transition={{
									duration: 0.3,
								}}
								className='text-base leading-4'
							>
								{<link.icon />}
							</motion.span>
							<motion.span
								initial={{ y: 0 }}
								animate={{ y: isHovered === index ? "200%" : "0%" }}
								transition={{
									duration: 0.3,
								}}
								className='text-sm leading-3 font-Source hidden md:block '
							>
								{link.title}
							</motion.span>
						</Link>
						<Link
							to={link.url}
							className='flex flex-row items-center uppercase gap-1 cursor-pointer absolute text-blacky overflow-hidden'
						>
							<motion.span
								initial={{ y: "-200%" }}
								animate={{ y: isHovered === index ? "0%" : "-150%" }}
								transition={{
									duration: 0.3,
								}}
								className='text-base leading-4'
							>
								{<link.icon />}
							</motion.span>
							<motion.span
								initial={{ y: "-200%" }}
								animate={{ y: isHovered === index ? "0%" : "-200%" }}
								transition={{
									duration: 0.3,
								}}
								className='text-sm leading-3  font-Source hidden md:block '
							>
								{link.title}
							</motion.span>
						</Link>
					</motion.li>
				))}
			</motion.ul>
		</div>
	);
};

export default Socials;
