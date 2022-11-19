import type { DatedRandomization, StringedRandomization } from "../Base.js";
import type BaseParams from "./BaseParams.js";

export default interface GenerateBlobsParams extends BaseParams {
	n: number;
	size: number;
	format?: "base64" | "hex";
	pregeneratedRandomization?: DatedRandomization | StringedRandomization;
}
