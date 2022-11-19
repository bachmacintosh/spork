import type { DatedRandomization, StringedRandomization, ValidBases } from "../Base.js";
import type BaseParams from "./BaseParams.js";

export default interface GenerateIntegerSequencesParams extends BaseParams {
	n: number[] | number;
	length: number[] | number;
	min: number[] | number;
	max: number[] | number;
	replacement?: boolean[] | boolean;
	base?: ValidBases | ValidBases[];
	pregeneratedRandomization?:
		| (DatedRandomization | StringedRandomization | null)[]
		| DatedRandomization
		| StringedRandomization
		| null;
}
