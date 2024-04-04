import { useParams } from "react-router";
import { casestudies } from "../data/db";
import DevvieBoard from "../component/DevvieBoard";
import Features from "../component/Features";
import { Link } from "react-router-dom";
import ScrollAnimation from "../component/ScrollAnimation";

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
					<Link
						to={url}
						target='_blank'
						className='flex flex-row gap-2 items-center hover:opacity-50 transition-opacity duration-200'
					>
						Go to website
						<div className='w-8 h-8 rounded-full bg-black text-white flex justify-center items-center'>
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
							</svg>{" "}
						</div>
					</Link>
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
