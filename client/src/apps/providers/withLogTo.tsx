import { LogtoConfig, LogtoProvider, UserScope } from "@logto/rn";
import { FC } from "react";

const config: LogtoConfig = {
	endpoint: process.env.EXPO_PUBLIC_LOGTO_ENDPOINT || "",
	appId: process.env.EXPO_PUBLIC_LOGTO_APP_ID || "",
	scopes: [UserScope.Email]
};

export const withLogTo =
	(Component: FC): FC =>
	() => (
		<LogtoProvider config={config}>
			<Component />
		</LogtoProvider>
	);
