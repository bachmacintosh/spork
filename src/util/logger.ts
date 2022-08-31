import type { LoggerOptions } from "pino";
import { pino } from "pino";

let level = "info";

if (typeof process.env.LOG_LEVEL !== "undefined") {
	level = process.env.LOG_LEVEL;
}

const options: LoggerOptions = {
	level,
	timestamp: pino.stdTimeFunctions.isoTime,
	base: null,
};

const logger = pino(options);

export default logger;
