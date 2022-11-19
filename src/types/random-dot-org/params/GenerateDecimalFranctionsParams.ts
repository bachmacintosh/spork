import type { DatedRandomization, StringedRandomization } from "../Base.js";

import type BaseParams from "./BaseParams.js";

export default interface GenerateDecimalFranctionsParams extends BaseParams {
	n: number;
	decimalPlaces: number;
	replacement?: boolean;
	pregeneratedRandomization?: DatedRandomization | StringedRandomization;
}
