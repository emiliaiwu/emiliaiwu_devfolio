import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ScrollContextProvider } from "./context/ScrollContext.jsx";
import { StickyScrollContextProvider } from "./context/StickyScrollContext.jsx";
import { ScrollColorContextProvider } from "./context/ScrollColorContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<ScrollContextProvider>
			<StickyScrollContextProvider>
				<ScrollColorContextProvider>
					<App />
				</ScrollColorContextProvider>
			</StickyScrollContextProvider>
		</ScrollContextProvider>
	</React.StrictMode>
);
