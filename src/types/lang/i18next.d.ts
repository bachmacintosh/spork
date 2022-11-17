import "i18next";

import type { resources } from "../../lang/config.js";

declare module "i18next" {
	interface CustomTypeOptions {
		resources: typeof resources["en-US"];
		returnNull: boolean;
	}
}
