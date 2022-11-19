import type GenerateBlobsParams from "./params/GenerateBlobsParams.js";
import type GenerateDecimalFranctionsParams from "./params/GenerateDecimalFranctionsParams.js";
import type GenerateGaussiansParams from "./params/GenerateGaussiansParams.js";
import type GenerateIntegerSequencesParams from "./params/GenerateIntegerSequencesParams.js";
import type GenerateIntegersParams from "./params/GenerateIntegersParams.js";
import type GenerateStringsParams from "./params/GenerateStringsParams.js";
import type GenerateUUIDsParams from "./params/GenerateUUIDsParams.js";
import type { GetUsageParams } from "./params/GetUsageParams.js";

export default interface RandomDotOrgParams {
	generateBlobs: GenerateBlobsParams;
	generateDecimalFractions: GenerateDecimalFranctionsParams;
	generateGaussians: GenerateGaussiansParams;
	generateIntegers: GenerateIntegersParams;
	generateIntegerSequences: GenerateIntegerSequencesParams;
	generateStrings: GenerateStringsParams;
	generateUUIDs: GenerateUUIDsParams;
	getUsage: GetUsageParams;
}
