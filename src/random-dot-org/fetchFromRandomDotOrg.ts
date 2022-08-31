import type RandomDotOrgParams from "../types/random-dot-org/RandomDotOrgParams.js";
import type RandomDotOrgRequest from "../types/random-dot-org/RandomDotOrgRequest.js";
import type RandomDotOrgResponse from "../types/random-dot-org/RandomDotOrgResponse.js";
import type { RequestInit } from "node-fetch";
import fetch from "node-fetch";
import reviveJson from "../util/reviveJson.js";

export default async function fetchFromRandomDotOrg<T extends keyof RandomDotOrgParams>(
	id: number,
	method: T,
	params: RandomDotOrgParams[T],
): Promise<RandomDotOrgResponse<T>> {
	const httpErrorThreshold = 400;
	const body: RandomDotOrgRequest<T> = {
		jsonrpc: "2.0",
		id,
		method,
		params,
	};
	const url = "https://api.random.org/json-rpc/4/invoke";
	const init: RequestInit = {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(body),
	};

	const response = await fetch(url, init);
	if (response.status < httpErrorThreshold) {
		const text = await response.text();
		return JSON.parse(text, reviveJson) as RandomDotOrgResponse<T>;
	} else {
		throw new Error(`(fetchFromRandomDotOrg) HTTP Error ${response.status} - ${response.statusText}`);
	}
}
