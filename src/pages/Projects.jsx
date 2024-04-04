import { Link } from "react-router-dom";
import { projectData } from "../data/db";
import { useEffect, useState } from "react";
import ScrollAnimation from "../component/ScrollAnimation";
import ArrowButton from "../component/ArrowButton";

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
															<ArrowButton url={project.url} index={index} isNearTop={true}/>
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
