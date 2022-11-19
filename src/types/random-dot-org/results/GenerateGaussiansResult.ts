import type { BaseCostedResult } from "./BaseCostedResult.js";

export default interface GenerateGaussiansResult extends BaseCostedResult {
	random: {
		data: number[];
		completionTime: Date;
	};
}
