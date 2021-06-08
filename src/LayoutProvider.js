import React, { createContext, useContext } from "react";

const LayoutContext = createContext();

export useLayout = () => useContext(LayoutContext);

export default function LayoutProvider({ children }) {
	const [layout, setLayout] = useState(layoutData);

	return (
		<LayoutContext.Provider value={{ layout }}>
		    { children }
		</LayoutContext.Provider>
	);
}