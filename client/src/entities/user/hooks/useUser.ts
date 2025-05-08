import { useContext } from "react";

import { UserContext } from "../context";
import { UserContextType as IUserContextType } from "../types";

export const useUser = (): IUserContextType => {
	const context = useContext(UserContext);

	if (!context) {
		throw new Error("useUser must be used within a UserContext.Provider");
	}

	return context;
};
