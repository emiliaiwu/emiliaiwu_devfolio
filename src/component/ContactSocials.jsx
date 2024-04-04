import { Link } from "react-router-dom";
import { motion } from "framer-motion";
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
		<div className='w-full h-full '>
			<motion.ul className='grid grid-cols-1 w-full h-full gap-5 lg:gap-10'>
				{socialLinks.map((link, index) => (
					<motion.li
						key={index}
						variants={slideInAnimationVariants(.5 + index * 0.3)}
						initial='initial'
						whileInView='animate'
						viewport={{ once: true }}
						onMouseOver={() => setIsHovered(index)}
						onMouseOut={() => setIsHovered(null)}
						className='text-black flex items-center h-full relative border-b border-blacky'
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
								className='text-2xl lg:text-5xl ss:text-4xl font-Source  '
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
								animate={{ y: isHovered === index ? "0%" : "-200%" }}
								transition={{
									duration: 0.3,
								}}
								className='text-2xl ss:text-4xl lg:text-5xl  font-Source  '
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
