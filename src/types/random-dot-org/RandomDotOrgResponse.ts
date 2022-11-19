import type RandomDotOrgError from "./RandomDotOrgError.js";
import type RandomDotOrgResult from "./RandomDotOrgResult.js";

export type RandomDotOrgResponse<T extends keyof RandomDotOrgResult> = ErrorResponse | SuccessfulResponse<T>;

interface SuccessfulResponse<T extends keyof RandomDotOrgResult> extends BaseResponse {
	result: RandomDotOrgResult[T];
	error?: never;
}

interface ErrorResponse extends BaseResponse {
	result?: never;
	error: RandomDotOrgError;
}

interface BaseResponse {
	jsonrpc: "2.0";
	id: number;
}
