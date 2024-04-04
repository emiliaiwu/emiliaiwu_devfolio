import { createContext, useEffect, useRef, useState } from "react";

const StickyScrollContext = createContext();

export const StickyScrollContextProvider = ({ children }) => {
	const leftSectionRef = useRef(null);
	const rightSectionRef = useRef(null);
	const [isSticky, setIsSticky] = useState(false);

	const handleScroll = () => {
		if (!leftSectionRef.current || !rightSectionRef.current) return;

		const leftSectionHeight = leftSectionRef.current.offsetHeight;
		const rightSectionHeight = rightSectionRef.current.offsetHeight;
		const shouldStick =
			window.scrollY >= leftSectionRef.current.offsetTop &&
			window.scrollY <
				rightSectionRef.current.offsetTop +
					rightSectionHeight -
					leftSectionHeight;

		setIsSticky(shouldStick);
	};

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<StickyScrollContext.Provider value={{isSticky, leftSectionRef, rightSectionRef}}>
			{children}
		</StickyScrollContext.Provider>
	);
};

export default StickyScrollContext;
