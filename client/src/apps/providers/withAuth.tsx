import { FC, useState } from "react";

import { UserContext } from "@/src/shared/context";

export const withAuth = (Component: FC): FC => {
	return () => {
		const [user, setUser] = useState<any>(null);

		return (
			<UserContext.Provider value={{ user, setUser }}>
				<Component />
			</UserContext.Provider>
		);
	};
};
