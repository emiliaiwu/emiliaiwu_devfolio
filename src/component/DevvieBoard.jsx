import { useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { motion } from "framer-motion";


const DevvieBoard = ({ image }) => {
	const imageRef = useRef(null);
	const { scrollYProgress } = useScroll({
		target: imageRef,
		offset: ["0 1", "1.33 1"],
	});

	const scaleProgress = useTransform(
		scrollYProgress,
		[0, 0.6],
		["50%", "100%"]
	);
	const opacityProgress = useTransform(scrollYProgress, [0, 0.6], [0, 1]);

	return (
		<div className='px-4'>
			<motion.div
				ref={imageRef}
				style={{
					scale: scaleProgress,
					opacity: opacityProgress,
				}}
				className='xxl:max-w-[1440px] max-w-[1000px] w-full flex justify-center items-center rounded-2xl backdrop border border-[#F0E7FF] p-4 shadow-2xl relative'
			>
				<div className='rounded-2xl overflow-hidden'>
					<img
						src={image}
						className='w-full h-full'
						loading='lazy'
						alt='Devvie Project Board Image'
					/>
				</div>
			</motion.div>
		</div>
	);
};

export default DevvieBoard;
