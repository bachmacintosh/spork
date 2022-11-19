import type { BaseCostedResult } from "./BaseCostedResult.js";

export default interface GenerateBlobResult extends BaseCostedResult {
	random: {
		data: string[];
		completionTime: Date;
	};
}
