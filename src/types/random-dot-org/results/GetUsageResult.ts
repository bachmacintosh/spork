export default interface GetUsageResult {
	status: "running" | "stopped";
	creationTime: Date;
	bitsLeft: number;
	requestsLeft: number;
	totalBits: number;
	totalRequests: number;
}
