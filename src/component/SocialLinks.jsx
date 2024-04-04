import { Link } from "react-router-dom";
import { Github, Instagram, Linkedin, Threads } from "../data/db";

const SocialLinks = () => {
	const socialLinks = [
		{
			icon: Github,
			url: "https://github.com/emiliaiwu",
		},

		{
			icon: Linkedin,
			url: "https://www.linkedin.com/in/emilia-iwu-5008441b0/",
		},

		{
			icon: Instagram,
			url: "https://www.instagram.com/emiliacodes/",
		},

		{
			icon: Threads,
			url: "https://www.threads.net/emiliacodes/",
		},
	];
	return (
    <div className="">
			<ul className="flex flex-row gap-5 items-center">
				{socialLinks.map((link, index) => (
					<li key={index} className="text-beige text-xl">
						<Link to={link.url}>{<link.icon/>}</Link>
					</li>
				))}
			</ul>
		</div>
	);
};

export default SocialLinks;
