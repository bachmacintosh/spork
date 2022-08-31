import type GenerateIntegersResult from "./results/GenerateIntegersResult.js";
import type GetUsageResult from "./results/GetUsageResult.js";

export default interface RandomDotOrgResult {
	generateIntegers: GenerateIntegersResult;
	getUsage: GetUsageResult;
}
