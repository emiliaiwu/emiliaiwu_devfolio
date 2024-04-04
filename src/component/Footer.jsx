import { Link } from "react-router-dom";

const Footer = () => {
	return (
		<section className='pb-10 w-full bg-lightBeige flex justify-center items-center z-[11] sticky pt-20'>
			<div className='w-full max-w-[1550px] lg:px-8 px-6 font-Source text-black text-sm flex md:flex-row flex-col md:justify-between justify-center items-center gap-6 '>
				<div className='font-medium text-blacky'>
					{" "}
					Designed and Developed by{" "}
					<span className='text-black'>Emilia Iwu.</span>
				</div>

				<div className='font-medium'>
					Copyright&copy;2024 - <Link to="https://emiliacodes.com">Emilia Iwu Projects.</Link>
				</div>
			</div>
		</section>
	);
};

export default Footer;
