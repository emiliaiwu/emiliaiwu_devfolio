import { createContext, useEffect, useRef, useState } from "react";

const ScrollColorContext = createContext();

export const ScrollColorContextProvider = ({ children }) => {
	const sectionRef = useRef(null);

	const [isNearTop, setIsNearTop] = useState(true);

	useEffect(() => {
		const handleScroll = () => {
			const sectionTop = sectionRef.current.getBoundingClientRect().top;
			if (sectionTop <= 60) {
				setIsNearTop(true);
			} else {
				setIsNearTop(false);
			}
		};

		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<ScrollColorContext.Provider value={{ isNearTop, sectionRef }}>
			{children}
		</ScrollColorContext.Provider>
	);
};

export default ScrollColorContext;
