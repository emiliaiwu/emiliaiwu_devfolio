const NotFound = () => {
	return (
		<div className='pt-20 w-full h-[100vh] bg-lightBeige font-Source flex justify-center items-center'>
			<div className='w-full flex flex-col justify-center items-center h-full max-w-[1550px] gap-3'>
				<span className='text-base'>oops....</span>
				<h1 className='font-bold text-7xl md:text-9xl xl:text-[150px]'>404</h1>
				<span className='text-base'>Page not found!</span>
			</div>
		</div>
	);
};

export default NotFound;
