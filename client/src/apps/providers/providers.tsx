import compose from "compose-function";

import { withAuth } from "./withAuth";
import { withFonts } from "./withFonts";
import { withGestureHandler } from "./withGestureHandler";
import { withLogTo } from "./withLogTo";
import { withSafeArea } from "./withSafeArea";

export const withProviders = compose(
	withFonts,
	withGestureHandler,
	withSafeArea,
	withLogTo,
	withAuth
);
