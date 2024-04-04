import ScrollAnimation from "./ScrollAnimation";

const Features = ({ features }) => {
	return (
		<div
			className={`w-full h-full text-black flex flex-col justify-center items-center gap-20 md:gap-[120px]`}
		>
			{features.map((item, index) => (
				<section
					key={index}
					className={`flex w-full lg:justify-center xxl:justify-between lg:gap-20 gap-10 items-center border border-white h-full p-4
						}  ${index % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"} flex-col`}
				>
					<div className='w-full lg:w-1/2 h-full'>
						<div className='p-4 bg-white inline-block'>
							<ScrollAnimation>
								<div className='w-full h-full'>
									<img
										src={item.image}
										className='w-full h-full object-contain'
										loading='lazy'
										alt="features image"
									/>
								</div>
							</ScrollAnimation>
						</div>
					</div>

					<div className='flex w-full lg:w-1/2 flex-col  '>
						<ScrollAnimation>
							<div className=' w-full flex flex-col gap-4 md:gap-6  max-w-[500px]'>
								<h2 className='text-xl sm:text-2xl lg:text-3xl whitespace-normal xl:leading-[50px] font-semibold max-w-[400px] mt-4'>
									{item.name}
								</h2>
								<p className='whitespace-normal text-sm sm:text-base xl:text-lg xl:leading-8 leading-6'>
									{item.details}
								</p>
							</div>
						</ScrollAnimation>
					</div>
				</section>
			))}
		</div>
	);
};

export default Features;
