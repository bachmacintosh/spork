import type { DatedRandomization, StringedRandomization } from "../Base.js";
import type BaseParams from "./BaseParams.js";

export default interface GenerateGaussiansParams extends BaseParams {
	n: number;
	mean: number;
	standardDeviation: number;
	significantDigits: number;
	pregeneratedRandomization?: DatedRandomization | StringedRandomization;
}
