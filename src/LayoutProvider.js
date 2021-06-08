import React, { createContext, useContext } from "react";

import layoutData from "../data/layout-data.json";

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