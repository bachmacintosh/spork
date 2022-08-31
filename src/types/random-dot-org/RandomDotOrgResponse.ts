import type RandomDotOrgError from "./RandomDotOrgError.js";
import type RandomDotOrgResult from "./RandomDotOrgResult.js";

export default interface RandomDotOrgResponse<T extends keyof RandomDotOrgResult> {
	jsonrpc: "2.0";
	id: number;
	error?: RandomDotOrgError;
	result?: RandomDotOrgResult[T];
}
