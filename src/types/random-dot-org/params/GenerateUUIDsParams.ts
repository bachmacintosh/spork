import type { DatedRandomization, StringedRandomization } from "../Base.js";
import type BaseParams from "./BaseParams.js";

export default interface GenerateUUIDsParams extends BaseParams {
	n: number;
	pregeneratedRandomization?: DatedRandomization | StringedRandomization;
}
