import { Link } from "react-router-dom";
import { emilia } from "../assets";
import { myTechStack } from "../data/db";
import ScrollAnimation from "./ScrollAnimation";

const Aboutt = () => {
	return (
		<section
			id='about'
			className='w-full min-h-[100vh] py-20  mx-auto bg-lightBeige overflow-y-visible flex justify-center items-center z-[5] sticky'
		>
			<div
				className={`flex flex-col justify-center w-full h-full gap-10 max-w-[1550px] lg:flex-row xl:px-6 xxl:px-0`}
			>
				<div className='w-full lg:w-[45%] flex flex-col justify-center items-center left-0 h-full lg:sticky top-20 relative'>
					<ScrollAnimation>
						<div className='w-full h-full'>
							<img
								src={emilia}
								className='w-full h-full object-cover'
								loading='lazy'
								alt="Emilia iwu's picture"
							/>
						</div>
					</ScrollAnimation>

					<div className='w-full mt-3'>
						<ScrollAnimation>
							<h1 className='font-Source lg:text-2xl text-lg sm:text-xl tracking-tight whitespace-normal lg:text-left xl:text-3xl text-center'>
								Emilia Iwu — Front-end Developer.
							</h1>
						</ScrollAnimation>
					</div>
				</div>
				<div className='w-full h-full lg:w-[55%] flex justify-center items-center self-center'>
					<div className='flex flex-col justify-center w-full max-w-[450px] xxl:max-w-[600px] xl:max-w-[530px] px-6 lg:px-0 md:max-w-[600px] xl:gap-4 '>
						<div className='xl:text-7xl xxl:text-8xl text-4xl ss:text-5xl sm:text-6xl font-semibold lg:sticky top-20 lg:h-24 bg-lightBeige opacity-100'>
							<ScrollAnimation>
								<h1 className='bg-lightBeige lg:h-24 z-50'>ABOUT ME</h1>
							</ScrollAnimation>
						</div>

						<div className='flex flex-col gap-6 justify-center items-center text-black xl:text-lg md:text-base  md:leading-6 xl:leading-7 font-light mt-8 z-[-1]'>
							<ScrollAnimation>
								<p className='w-full  whitespace-normal font-Source tracking-tight'>
									Hello, my name is Emilia Iwu, and I am based in Nigeria. I
									enjoy building web apps that solve real world problems.
								</p>
							</ScrollAnimation>
							<ScrollAnimation>
								<p className='w-full  whitespace-normal font-Source tracking-tight'>
									My journey into software development began in 2022 when I
									enrolled in the ALX Software Engineering Program. Although I
									did not complete the program, my passion for technology and
									problem-solving inspired me to continue learning on my own. I
									have since dedicated myself to learning various programming
									languages and tools through online courses, tutorials, and
									hands-on projects.
								</p>
							</ScrollAnimation>
							<ScrollAnimation>
								<p className='w-full  whitespace-normal font-Source tracking-tight'>
									A project, I built I'm particularly proud of is{" "}
									<Link>
										<strong className='font-semibold'>Devvify.com,</strong>
									</Link>{" "}
									a project management tool designed to help new developers
									track, manage, and showcase their projects. This project
									allowed me to dive deep into React.js and Firebase, honing my
									skills in front-end development and database management.
									Through this project, I've developed a solid foundation in{" "}
									<b className='font-semibold'>React.</b>
								</p>
							</ScrollAnimation>
							{/* <ScrollAnimation>
								<p className='w-full  whitespace-normal font-Source tracking-tight'>
									During my internship at{" "}
									<b className='font-semibold'>AutoMedSys,</b> I experienced
									personal and professional growth. Working with seasoned
									developers helped me gain experience in developing responsive,
									accessible, and performance-optimized frontend
									functionalities.
								</p>
							</ScrollAnimation> */}
							<ScrollAnimation>
								<p className='w-full whitespace-normal font-Source tracking-tight'>
									Looking ahead, I aim to specialize in front-end development,
									with a focus on creating scalable web applications that
									address real-world problems. I am eager to collaborate with
									like-minded professionals and contribute to meaningful
									projects that leverage technology to make a positive impact on
									people's lives
								</p>
							</ScrollAnimation>
							<ScrollAnimation>
								<div className='w-full whitespace-normal font-Source tracking-tight font-medium'>
									Here are a few technologies I’ve been working with recently:
									<ul className='grid xl:grid-cols-4 grid-cols-3 mt-4 gap-2 font-light'>
										{myTechStack.map((stack, index) => (
											<li
												key={index}
												className='text-sm xl:text-base flex flex-row items-center'
											>
												<span className='w-1 h-1 bg-black rounded-full mr-2'></span>
												{stack}
											</li>
										))}
									</ul>
								</div>
							</ScrollAnimation>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Aboutt;
