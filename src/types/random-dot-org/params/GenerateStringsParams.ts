import type { DatedRandomization, StringedRandomization } from "../Base.js";
import type BaseParams from "./BaseParams.js";

export default interface GenerateStringsParams extends BaseParams {
	n: number;
	length: number;
	characters: string;
	replacement?: boolean;
	pregeneratedRandomization?: DatedRandomization | StringedRandomization;
}
