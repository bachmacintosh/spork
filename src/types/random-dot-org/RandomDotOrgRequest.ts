import type RandomDotOrgParams from "./RandomDotOrgParams.js";

export default interface RandomDotOrgRequest<T extends keyof RandomDotOrgParams> {
	jsonrpc: "2.0";
	id: number;
	method: T;
	params: RandomDotOrgParams[T];
}
