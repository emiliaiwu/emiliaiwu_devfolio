import { useParams } from "react-router";
import { casestudies } from "../data/db";
import DevvieBoard from "../component/DevvieBoard";
import Features from "../component/Features";
import { Link } from "react-router-dom";
import ScrollAnimation from "../component/ScrollAnimation";
import ArrowButton from "../component/ArrowButton";

const Casestudy = () => {
	const { slug } = useParams();
	window.scrollTo({ top: 0, behavior: "smooth" });

	const casestudy = casestudies.find((casestudy) => casestudy.slug === slug);
	const {
		title,
		description,
		image,
		problem,
		solution,
		role,
		techStack,
		timeline,
		features,
		url,
		index
	} = casestudy;

	return (
		<section className='bg-lightBeige min-h-full w-full pt-20 flex justify-center items-center font-Source'>
			<div className='text-black max-w-[1580px] w-full h-full flex justify-center pt-20 flex-col items-center gap-10'>
				<div className='flex flex-col max-w-[800px] w-full items-center gap-5'>
					<p className='text-sm uppercase'>Case Study</p>
					<h1 className='xl:text-7xl whitespace-normal text-center w-full font-semibold text-3xl md:text-5xl xl:leading-[90px] overflow-hidden'>
						<ScrollAnimation>{title}</ScrollAnimation>
					</h1>
					<p className='xl:text-xl whitespace-normal text-center w-full text-base px-4'>
						{description}
					</p>
					<div className='flex flex-row gap-2 items-center hover:opacity-50 transition-opacity duration-200'>
						Go to website
						<ArrowButton url={url} index={index} isNearTop={true} />
					</div>
				</div>

				<DevvieBoard image={image} />

				<div className='w-full grid grid-cols-1 ss:grid-cols-2 md:grid-cols-3 xxl:grid-cols-5 justify-between mt-20 px-4 gap-10 '>
					<div>
						<h2 className='text-xl font-semibold mb-2'>Timeline</h2>
						<p>
							<ScrollAnimation>{timeline}</ScrollAnimation>
						</p>
					</div>
					<div className='px-6'>
						<h2 className='text-xl font-semibold mb-2 -ml-5'>My Role</h2>
						<ScrollAnimation>
							<ul>
								{role.map((item, index) => (
									<li key={index} className='list-disc mb-1'>
										{item}
									</li>
								))}
							</ul>
						</ScrollAnimation>
					</div>
					<div className='px-6'>
						<h2 className='text-xl font-semibold mb-2 -ml-5'>Tech Stack</h2>
						<ScrollAnimation>
							<ul>
								{techStack.map((item, index) => (
									<li key={index} className='list-disc mb-1'>
										{item}
									</li>
								))}
							</ul>
						</ScrollAnimation>
					</div>

					<div className=' flex flex-col justify-between gap-20 w-full md:col-span-3 xl:flex-row xxl:flex-col xxl:col-span-2 '>
						<div className='max-w-[450px] w-full'>
							<h2 className='text-xl font-semibold mb-2'>Problem </h2>
							<p className='whitespace-normal text-base leading-7'>
								<ScrollAnimation>{problem}</ScrollAnimation>
							</p>
						</div>{" "}
						<div className='max-w-[450px] w-full'>
							<h2 className='text-xl font-semibold mb-2'>Solution</h2>
							<p className='whitespace-normal text-base leading-7'>
								<ScrollAnimation>{solution}</ScrollAnimation>
							</p>
						</div>{" "}
					</div>
				</div>

				<div className='w-full py-20'>
					<h1 className='lg:text-5xl font-semibold mb-10 text-3xl px-4'>
						Key Features
					</h1>
					<Features features={features} />
				</div>
			</div>
		</section>
	);
};

export default Casestudy;
