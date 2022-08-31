export default interface GenerateIntegersParams {
	apiKey: string;
	n: number;
	min: number;
	max: number;
	replacement?: boolean;
	base?: ValidBases;
	pregeneratedRandomization?: DatedRandomization | StringedRandomization | null;
}

type ValidBases = 2 | 8 | 10 | 16;

interface DatedRandomization {
	date: string;
}

interface StringedRandomization {
	id: string;
}
