import type { BaseCostedResult } from "./BaseCostedResult.js";

export default interface GenerateUUIDsResult extends BaseCostedResult {
	random: {
		data: string[];
		completionTime: Date;
	};
}
