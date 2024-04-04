import { Link } from "react-router-dom";
import { projectData } from "../data/db";
import { useEffect, useState } from "react";
import ScrollAnimation from "../component/ScrollAnimation";

const Projects = () => {
	const [filter, setFilter] = useState("All");
	const [filteredProjects, setFilteredProjects] = useState(projectData);
	window.scrollTo({ top: 0, behavior: "smooth" });
	useEffect(() => {
		if (filter === "All") {
			setFilteredProjects(projectData);
		} else {
			const filtered = projectData.filter((project) => project.type === filter);
			setFilteredProjects(filtered);
		}
	}, [filter]);

	const links = ["All", "WebApp", "Website"];

	return (
		<section className='w-full min-h-full bg-lightBeige py-20 font-Source flex justify-center'>
			<div className='w-full flex flex-col justify-center items-center h-full max-w-[1550px] gap-2'>
				<div className='w-full flex justify-center'>
					<h1 className='text-black xxl:text-[220px] font-semibold tracking-tight sm:text-[90px] text-[46px] xs:text-[56px] xx:text-[62px] ss:text-[70px] md:text-[110px] lg:text-[150px] xl:text-[200px]'>
						<ScrollAnimation>ALL PROJECTS</ScrollAnimation>
					</h1>
				</div>
				<div className='w-full px-4'>
					<div className='flex w-full mb-4'>
						<div className='w-1/3 md:block hidden'></div>
						<div className='flex flex-col xx:flex-row md:w-2/3 w-full font-semibold tracking-tight gap-3 ss:text-lg xl:text-xl justify-start '>
							{links.map((link) => (
								<div key={link}>
									<ScrollAnimation>
										<button
											onClick={() => setFilter(`${link}`)}
											className={`flex flex-row items-center gap-1 uppercase ${
												filter === link ? "text-black" : "text-blacky"
											}`}
										>
											{" "}
											<span
												className={` bg-black rounded-full transition-all duration-300 ${
													filter === link
														? "w-4 h-4 "
														: "md:w-0 md:h-0 w-4 h-4 bg-blacky"
												}`}
											></span>
											{link}
										</button>
									</ScrollAnimation>
								</div>
							))}
						</div>
					</div>
					<div>
						<ul className='flex flex-col-reverse'>
							{filteredProjects.map((project, index) => (
								<li key={index} className='flex md:flex-row flex-col '>
									<ScrollAnimation>
										<div className='flex md:flex-row flex-col md:h-full lg:h-[300px] xl:h-[350px] xxl:h-[400px] border-t border-blacky py-10'>
											<div className='w-1/3 text-lg sm:text-2xl lg:text-4xl font-bold text-blacky'>
												({index + 1})
											</div>{" "}
											<div className='md:w-2/3 w-full flex gap-6 justify-between lg:flex-row flex-col'>
												<div className='md:max-w-[300px] lg:max-w-[300px] xl:max-w-[380px] flex flex-col justify-between gap-6'>
													<div>
														<h2 className='text-2xl font-Poppins font-medium tracking-tight flex flex-row gap-6 mb-4'>
															{project.title}
															<Link
																to={project.url}
																target='_blank'
																className={`w-8 h-8 rounded-full flex justify-center items-center bg-black text-white `}
															>
																<svg
																	width='18'
																	height='18'
																	viewBox='0 0 18 18'
																	fill='none'
																	xmlns='http://www.w3.org/2000/svg'
																>
																	<path
																		d='M13.922 4.5V11.8125C13.922 11.9244 13.8776 12.0317 13.7985 12.1108C13.7193 12.1899 13.612 12.2344 13.5002 12.2344C13.3883 12.2344 13.281 12.1899 13.2018 12.1108C13.1227 12.0317 13.0783 11.9244 13.0783 11.8125V5.51953L4.79547 13.7953C4.71715 13.8736 4.61092 13.9176 4.50015 13.9176C4.38939 13.9176 4.28316 13.8736 4.20484 13.7953C4.12652 13.717 4.08252 13.6108 4.08252 13.5C4.08252 13.3892 4.12652 13.283 4.20484 13.2047L12.4806 4.92188H6.18765C6.07577 4.92188 5.96846 4.87743 5.88934 4.79831C5.81023 4.71919 5.76578 4.61189 5.76578 4.5C5.76578 4.38811 5.81023 4.28081 5.88934 4.20169C5.96846 4.12257 6.07577 4.07813 6.18765 4.07812H13.5002C13.612 4.07813 13.7193 4.12257 13.7985 4.20169C13.8776 4.28081 13.922 4.38811 13.922 4.5Z'
																		fill='currentColor'
																	></path>
																</svg>
															</Link>
														</h2>

														<p className='whitespace-normal text-sm lg:text-base'>
															{project.description}
														</p>
													</div>

													<ul className='flex w-full flex-row gap-2 gap-y-1 flex-wrap text-blacky text-xs font-Source'>
														{project.techStack.map((stack, index) => (
															<li
																key={index}
																className='flex flex-row items-center gap-2 capitalize'
															>
																{stack}{" "}
																<div
																	className={`bg-black
															 w-1 h-1 rounded-full `}
																></div>
															</li>
														))}
													</ul>

													<div className='flex flex-row  gap-5 items-center w-full justify-between'>
														<Link
															to={project.sourceCode}
															className='font-Source border-b border-blacky text-xs uppercase'
														>
															Source code
														</Link>
														{project.hasCaseStudy && (
															<Link
																to={project.caseStudyLink}
																className='font-Source border-b border-blacky text-xs uppercase'
															>
																Case Study
															</Link>
														)}
													</div>
												</div>
												<div className='flex flex-col justify-between gap-6 md:w-[300px] lg:w-[300px] xl:w-[380px] xxl:w-[420px] h-full w-full'>
													<div className='w-full h-full'>
														<img
															src={project.image}
															alt='project image'
															className='w-full h-full object-cover'
														/>
													</div>
												</div>
											</div>
										</div>
									</ScrollAnimation>
								</li>
							))}
						</ul>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Projects;
