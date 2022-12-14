import type { BaseCostedResult } from "./BaseCostedResult.js";

export default interface GenerateIntegersResult extends BaseCostedResult {
	random: {
		data: number[] | string[];
		completionTime: Date;
	};
}
