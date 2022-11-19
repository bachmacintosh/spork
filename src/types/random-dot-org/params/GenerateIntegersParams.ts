import type { DatedRandomization, StringedRandomization, ValidBases } from "../Base.js";
import type BaseParams from "./BaseParams.js";

export default interface GenerateIntegersParams extends BaseParams {
	n: number;
	min: number;
	max: number;
	replacement?: boolean;
	base?: ValidBases;
	pregeneratedRandomization?: DatedRandomization | StringedRandomization | null;
}
