export default function reviveJson(key: unknown, value: unknown): unknown {
	const datePattern = /\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+(?<offset>[+-][0-2]\d:[0-5]\d|Z)/u;
	const isDate = typeof value === "string" && datePattern.exec(value);
	if (typeof value === "string" && isDate !== null) {
		return new Date(value);
	} else {
		return value;
	}
}
