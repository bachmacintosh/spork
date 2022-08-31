import type GenerateIntegersParams from "./params/GenerateIntegersParams.js";
import type GetUsageParams from "./params/GetUsageParams.js";

export default interface RandomDotOrgParams {
	generateIntegers: GenerateIntegersParams;
	getUsage: GetUsageParams;
}
