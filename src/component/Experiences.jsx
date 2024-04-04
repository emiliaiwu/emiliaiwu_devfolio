import { Download, experiences } from "../data/db";

const Experiences = () => {
	return (
		<section className='w-full py-20 mx-auto bg-lightBeige overflow-y-visible flex justify-center z-[7] sticky'>
			<div className='max-w-[1550px] w-full h-full px-6 lg:px-0'>
				<div className=' uppercase text-sm font-Source tracking-widest font-semibold xl:h-28 h-16 ss:h-20 lg:h-24 w-full text-center flex justify-between items-center sticky left-0 right-0 sm:top-20 top-16 bg-lightBeige z-50'>
					<h1 className='xl:text-7xl text-[22px] ss:text-3xl sm:text-5xl lg:text-6xl xxl:text-8xl'>
						Experiences
					</h1>
					<button className='uppercase font-light py-2 px-4 border border-black rounded-full text-xs flex flex-row items-center gap-1'>
						Resume <Download className='text-base' />
					</button>
				</div>

				<div className="mt-20">
					<ul>
						{experiences.map((experience, index) => (
							<li key={index} className='text-lg'>
								<div className='text-blacky mb-3'>{experience.year}</div>
								<div>
									<div className='text-black'>{experience.role}</div>
									<div className='text-blacky'>{experience.company}</div>
								</div>
							</li>
						))}
					</ul>
				</div>
			</div>
		</section>
	);
};

export default Experiences;
