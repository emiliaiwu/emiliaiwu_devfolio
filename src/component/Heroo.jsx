import EmiliaText from "./EmiliaText";
import ScrollAnimation from "./ScrollAnimation";
import ScrollDownRotate from "./ScrollDownRotate";
import Socials from "./Socials";
import { motion } from "framer-motion";

const Heroo = () => {
	const fadeInAnimationVariants = (delay, y) => ({
		initial: {
			y: y,
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

	return (
		<section className='py-20 md:pt-20 md:pb-10 pb-32 bg-lightBeige max-w-full w-full h-[100vh] flex justify-center items-center sticky z-[1] top-0'>
			<div className='flex justify-center items-center flex-col w-full xl:max-w-[1180px] xxl:max-w-[1450px]  xxl:gap-16 gap-10 xl:gap-4 h-full xl:mt-20 fixed'>
				<div className='xl:max-w-[1140px] max-w-[720px] xxl:max-w-[1450px] w-full md:px-3 flex flex-row justify-between items-center px-6 xs:gap-20'>
					<motion.p className='text-xl font-semibold font-Source tracking-tight w-full flex flex-row items-center h-6 overflow-hidden text-blacky'>
						<motion.div
							className='mr-1 overflow-hidden'
							variants={fadeInAnimationVariants(1, 25)}
							initial='initial'
							whileInView='animate'
							viewport={{ once: true }}
						>
							Hello
						</motion.div>
						<motion.div
							variants={fadeInAnimationVariants(1.4, 25)}
							initial='initial'
							whileInView='animate'
							viewport={{ once: true }}
						>
							World!
						</motion.div>
					</motion.p>
					<Socials />
				</div>
				<div className='h-[100px] md:h-[260px] xxl:h-[350px] flex justify-center items-center overflow-hidden'>
					<EmiliaText />
				</div>
				<div className='w-full flex xxl:justify-start justify-center items-center overflow-hidden'>
					<ScrollAnimation>
						<div className='w-full flex xxl:justify-start justify-center items-center overflow-hidden'>
							<div className='w-full flex xxl:justify-start justify-center items-center overflow-hidden'>
								<div className=' max-w-[720px] w-full flex md:flex-row flex-col items-center lg:pl-3 px-6 lg:px-0 xl:max-w-[1140px] text-blacky h-full '>
									<div className='whitespace-normal text-4xl font-Source tracking-tight font-semibold hidden md:flex xl:w-[200px] w-[180px] '>
										Open to Remote
									</div>

									<div className='w-[1px] h-[100px] bg-blacky xl:mr-16 mr-8 hidden lg:block'></div>

									<div className=' md:max-w-[500px] lg:max-w-[580px] xxl:max-w-[650px] whitespace-normal font-Source text-base leading-7 font-light xxl:text-lg xxl:leading-8 text-blacky tracking-tight'>
										I am a <b className='font-semibold'>Front-end Developer</b>{" "}
										based in Nigeria. I love building products that address
										real-world problems. I specialize in building visually
										appealing, responsive, accessible, and functionally rich
										websites and web-apps.
									</div>
								</div>
							</div>
						</div>
					</ScrollAnimation>
				</div>
				<div className='absolute right-14 bottom-8 ss:bottom-10 sm:bottom-14 md:bottom-24 xxl:bottom-28 xl:bottom-16 '>
					<ScrollAnimation>
						<ScrollDownRotate />
					</ScrollAnimation>
				</div>
			</div>
		</section>
	);
};

export default Heroo;
