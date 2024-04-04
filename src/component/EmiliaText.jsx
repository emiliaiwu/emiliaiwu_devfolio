import { motion } from "framer-motion";

const EmiliaText = () => {
	// Function to generate animation variants
	const generateAnimationVariants = (isFadeIn, duration) => ({
		initial: {
			opacity: 0,
			y: isFadeIn ? -50 : 50,
		},
		animate: {
			opacity: 1,
			y: 0,
			transition: {
				duration: duration,
				delay: .2,
				...isFadeIn, // Only add delay for fadeIn
			},
		},
	});

	const firstName = "Emilia";
	const lastName = "Iwu.";
	const styleClasses = "xl:text-[220px] font-Poppins font-semibold uppercase md:text-[145px] xx:text-[78px]";

	return (
		<div className='flex flex-row gap-2 lg:gap-8 items-center w-full justify-center text-black'>
			<motion.h1 className='flex flex-row items-center'>
				{firstName.split("").map((char, index) => (
					<motion.span
						key={index}
						variants={generateAnimationVariants(
							index % 2 === 0,
							1.2
						)}
						initial='initial'
						whileInView='animate'
						viewport={{ once: true }}
						className={`${styleClasses} ${
							index !== 0 ? "md:-ml-3 -ml-1" : ""
						} xs:text-[68px] text-6xl xxl:text-[280px]`}
					>
						{char}
					</motion.span>
				))}
			</motion.h1>
			<motion.h1 className='flex flex-row items-center'>
				{lastName.split("").map((char, index) => (
					<motion.span
						key={index}
						variants={generateAnimationVariants(
							index % 2 === 0,
							1.2
						)}
						initial='initial'
						whileInView='animate'
						viewport={{ once: true }}
						className={`${styleClasses} ${
							index !== 0 ? "md:-ml-2 -ml-1" : ""
						} xs:text-[68px] text-6xl xxl:text-[280px] `}
					>
						{char}
					</motion.span>
				))}
			</motion.h1>
		</div>
	);
};

export default EmiliaText;
