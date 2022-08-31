import type RandomDotOrgResponse from "../types/random-dot-org/RandomDotOrgResponse.js";
import fetchFromRandomDotOrg from "./fetchFromRandomDotOrg.js";

export default async function getUsage(apiKey: string): Promise<RandomDotOrgResponse<"getUsage">> {
	const id = Date.now();
	const result = await fetchFromRandomDotOrg(id, "getUsage", { apiKey });
	return result;
}
