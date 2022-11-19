export type ValidBases = 2 | 8 | 10 | 16;

export interface DatedRandomization {
	date: string;
	id?: never;
}

export interface StringedRandomization {
	id: string;
	date?: never;
}
