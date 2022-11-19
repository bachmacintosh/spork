import type { BaseCostedResult } from "./BaseCostedResult.js";

export default interface GenerateIntegerSequencesResult extends BaseCostedResult {
	random: {
		data: number[][];
		completionTime: Date;
	};
}
