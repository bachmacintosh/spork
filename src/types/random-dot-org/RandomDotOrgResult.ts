import type GenerateBlobResult from "./results/GenerateBlobsResult.js";
import type GenerateDecimalFractionsResult from "./results/GenerateDecimalFractionsResult.js";
import type GenerateGaussiansResult from "./results/GenerateGaussiansResult.js";
import type GenerateIntegerSequencesResult from "./results/GenerateIntegerSequencesResult.js";
import type GenerateIntegersResult from "./results/GenerateIntegersResult.js";
import type GenerateStringsResult from "./results/GenerateStringsResult.js";
import type GenerateUUIDsResult from "./results/GenerateUUIDsResult.js";
import type GetUsageResult from "./results/GetUsageResult.js";

export default interface RandomDotOrgResult {
	generateBlobs: GenerateBlobResult;
	generateDecimalFractions: GenerateDecimalFractionsResult;
	generateGaussians: GenerateGaussiansResult;
	generateIntegers: GenerateIntegersResult;
	generateIntegerSequences: GenerateIntegerSequencesResult;
	generateStrings: GenerateStringsResult;
	generateUUIDs: GenerateUUIDsResult;
	getUsage: GetUsageResult;
}
