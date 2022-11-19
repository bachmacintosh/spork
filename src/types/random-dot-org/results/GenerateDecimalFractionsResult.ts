import type { BaseCostedResult } from "./BaseCostedResult.js";

export default interface GenerateDecimalFractionsResult extends BaseCostedResult {
	random: {
		data: number[];
		completionTime: Date;
	};
}
