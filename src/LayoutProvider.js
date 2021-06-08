import React, { createContext, useContext, useState } from "react";

import layoutData from "../data/layout-data.json";

const LayoutContext = createContext();

export const useLayout = () => useContext(LayoutContext);

export default function LayoutProvider({ children }) {
	const [layout, setLayout] = useState(layoutData);

	return (
		<LayoutContext.Provider value={{ layout }}>
		    { children }
		</LayoutContext.Provider>
	);
}