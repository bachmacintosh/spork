import type { BaseCostedResult } from "./BaseCostedResult.js";

export default interface GenerateStringsResult extends BaseCostedResult {
	random: {
		data: string[];
		completionTime: Date;
	};
}
