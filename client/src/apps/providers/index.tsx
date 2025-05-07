import { ReactNode } from "react";

import { withProviders } from "./providers";

interface ProvidersProps {
	children: ReactNode;
}

const Providers = ({ children }: ProvidersProps) => {
	const EnhancedApp = withProviders(() => <>{children}</>);
	return <EnhancedApp />;
};

export default Providers;
