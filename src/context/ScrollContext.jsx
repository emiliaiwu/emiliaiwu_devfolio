import { createContext, useEffect, useRef, useState } from "react";

const ScrollContext = createContext();

export const ScrollContextProvider = ({ children }) => {
	const firstSectionRef = useRef(null);
	const secondSectionRef = useRef(null);
	const [isSecondSectionFixed, setIsSecondSectionFixed] = useState(true);

	useEffect(() => {
		const handleScroll = () => {
			const firstSectionBottom =
				firstSectionRef.current.getBoundingClientRect().bottom;

			// Check if the bottom of the first section is above the viewport
			const isFirstSectionOffScreen = firstSectionBottom < 0;

			setIsSecondSectionFixed(!isFirstSectionOffScreen);
		};

		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<ScrollContext.Provider
			value={{
				firstSectionRef,
				secondSectionRef,
				isSecondSectionFixed,
				setIsSecondSectionFixed,
			}}
		>
			{children}
		</ScrollContext.Provider>
	);
};

export default ScrollContext;
