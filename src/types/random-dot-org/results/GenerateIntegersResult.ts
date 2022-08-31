export default interface GenerateIntegersResult {
	random: {
		data: number[] | string[];
		completedTime: Date;
	};
	bitsUsed: number;
	bitsLeft: number;
	requestsLeft: number;
	advisoryDelay: number;
}
