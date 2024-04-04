import { Link } from "react-router-dom";
import Socials from "./ContactSocials";
import { useState } from "react";
import { motion } from "framer-motion";
import ScrollAnimation from "./ScrollAnimation";

const Contact = () => {
	const [isHovered, setIsHovered] = useState(false);
	return (
		<section
			id='contact'
			className=' bg-lightBeige font-Source max-w-full w-full flex lg:justify-end justify-center items-center z-[9] sticky flex-col min-h-full lg:py-40'
		>
			<div className='flex flex-col justify-center items-center lg:items-start gap-20 w-full h-full max-w-[1550px] px-6 xxl:px-0'>
				<div className='flex justify-center items-center'>
					<div className='xl:text-[150px] xxl:text-[180px] text-5xl xs:text-6xl ss:text-7xl sm:text-8xl lg:text-9xl uppercase flex flex-col gap-2 justify-center font-semibold'>
						<ScrollAnimation>
							<span>Let&#39;s Work</span>{" "}
						</ScrollAnimation>
						<ScrollAnimation>
							<span className='w-full xxl:pl-[500px] xl:pl-[400px]'>
								Together...
							</span>
						</ScrollAnimation>
					</div>
				</div>
				<div className='w-full h-full flex lg:flex-row flex-col gap-20 justify-between items-center px-6 lg:pr-20'>
					<div className='max-w-[400px] w-full h-full'>
						<Socials />
					</div>
					<div className='max-w-[230px] w-full flex flex-col gap-4 '>
						<ScrollAnimation>
							<p className='uppercase font-semibold text-2xl tracking-tight'>
								CONTACT INFO
							</p>
						</ScrollAnimation>
						<ScrollAnimation>
							<p className='whitespace-normal text-sm tracking-tight'>
								Do you want me to join your team, company, collaborate or just
								want to say hi, I&#39;d love to hear from you!
							</p>
						</ScrollAnimation>
						<ScrollAnimation>
							<div
								onMouseOver={() => setIsHovered(true)}
								onMouseOut={() => setIsHovered(false)}
								className='relative overflow-hidden w-full'
							>
								<Link
									to={"mailto:emiliaiwuc@gmail.com?Subject=Hello%20Emilia"}
									className='tracking-tight text-lg flex justify-center items-center leading-5 w-full font-medium'
								>
									<motion.span
										initial={{ y: 0 }}
										animate={{ y: isHovered ? "200%" : "0%" }}
										transition={{
											duration: 0.3,
										}}
										className='w-full text-blacky'
									>
										Emiliaiwu@gmail.com
									</motion.span>
									<motion.span
										initial={{ y: "-200%" }}
										animate={{ y: isHovered ? "0%" : "-200%" }}
										transition={{
											duration: 0.3,
										}}
										className=' absolute w-full'
									>
										Emiliaiwu@gmail.com
									</motion.span>
								</Link>
							</div>
						</ScrollAnimation>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Contact;
