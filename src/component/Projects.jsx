import { Link } from "react-router-dom";
import { projectData } from "../data/db";
import { motion } from "framer-motion";
import { useContext, useState } from "react";
import { ScrollColorContext } from "../context";
import ScrollAnimation from "./ScrollAnimation";
import ArrowButton from "./ArrowButton";

const Projects = () => {
	const [isHovered, setIsHovered] = useState(false);

	const { isNearTop, sectionRef } = useContext(ScrollColorContext);

	return (
		<section
			ref={sectionRef}
			className={`${
				isNearTop
					? "bg-lightBeige transition-colors duration-500 ease-in-out"
					: "bg-black transition-colors duration-500 ease-in-out"
			} min-h-[100vh] w-full  z-[3] lg:py-20 py-10 flex justify-center items-center sticky  `}
		>
			<div className='w-full xs:px-6 px-4 flex justify-center items-center flex-col gap-10 max-w-[1550px]'>
				<div
					className={`${
						isNearTop
							? "bg-lightBeige text-black "
							: "bg-black text-lightBeige "
					}  transition-colors duration-500 ease-in-out uppercase text-sm font-Source tracking-widest font-semibold xl:h-28 h-16 ss:h-20 lg:h-24 w-full text-center overflow-hidden flex justify-between items-center sticky left-0 right-0 sm:top-20 top-16  z-50 `}
				>
					<h1 className='xl:text-7xl xs:text-[22px] text-lg ss:text-3xl sm:text-5xl lg:text-6xl xxl:text-8xl flex flex-row gap-3'>
						Selected Projects
					</h1>
					<Link
						to={"/projects"}
						className={`${
							isNearTop ? "border-black" : "border-lightBeige"
						} uppercase font-light py-2 px-4 border rounded-full text-xs hidden sm:flex  `}
					>
						All projects
					</Link>
					<Link
						to={"/projects"}
						className={`${
							isNearTop ? "border-black border" : "border-lightBeige border"
						} uppercase font-light py-2 px-4 border rounded-full text-xs sm:hidden `}
					>
						All
					</Link>
				</div>
				<ul className='grid justify-center items-center w-full gap-28'>
					{projectData.map((project, index) => (
						<li
							key={project.title}
							className={`${
								isNearTop
									? " text-black border-black"
									: " text-lightBeige border-lightBeige"
							} w-full h-full `}
						>
							<div
								className={`flex h-full w-full justify-center items-center lg:flex-row gap-20 flex-col-reverse`}
							>
								<div
									className={` w-full h-full flex lg:w-[40%] justify-between `}
								>
									<div
										className={`flex flex-col gap-5 justify-between w-full `}
									>
										<div>
											<ScrollAnimation>
												<p className='text-xs font-Source font-blacky tracking-widest uppercase w-full'>
													{`${index + 1}`.padStart(2, "0")} — {project.type}
												</p>
											</ScrollAnimation>
										</div>

										<div className='flex flex-col gap-8'>
											<ScrollAnimation>
												<h2 className='text-2xl font-Poppins font-medium tracking-tight flex flex-row gap-6'>
													{project.title}
													<ArrowButton
														url={project.url}
														index={index}
														isNearTop={isNearTop}
													/>
												</h2>
											</ScrollAnimation>{" "}
											<ScrollAnimation>
												<p className='whitespace-normal w-full font-Source text-base lg:text-lg font-light max-w-[500px]'>
													{project.description}
												</p>
											</ScrollAnimation>
											<ScrollAnimation>
												<ul className='flex w-full flex-row gap-2 gap-y-1 flex-wrap text-blacky text-sm font-Source'>
													{project.techStack.map((stack, index) => (
														<li
															key={index}
															className='flex flex-row items-center gap-2 capitalize'
														>
															{stack}{" "}
															<div
																className={`${
																	isNearTop ? "bg-black" : "bg-lightBeige"
																} w-1 h-1 rounded-full `}
															></div>
														</li>
													))}
												</ul>
											</ScrollAnimation>
										</div>

										<div className='w-full'>
											<ScrollAnimation>
												<div className='flex flex-row  gap-5 items-center w-full justify-between'>
													<Link className='font-Source border-b border-blacky text-sm uppercase'>
														Source code
													</Link>
													{project.hasCaseStudy && (
														<Link
															to={project.caseStudyLink}
															className='font-Source border-b border-blacky text-sm uppercase'
														>
															Case Study
														</Link>
													)}
												</div>
											</ScrollAnimation>
										</div>
									</div>
								</div>

								<div className='w-full lg:w-[60%] relative flex justify-center items-center h-auto'>
									<ScrollAnimation>
										<img
											src={project.image}
											className='w-full h-full'
											loading='lazy'
											alt='project image'
										/>
									</ScrollAnimation>
								</div>
							</div>
							{/* <div className='w-full h-[1px] bg-blacky'></div> */}
						</li>
					))}
				</ul>
			</div>
		</section>
	);
};

export default Projects;
