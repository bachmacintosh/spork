import logger from "../util/logger.js";

export default function onShardError(error: Error, id: number): void {
	logger.error(`(onShardError) Shard ID ${id} encountered an error:}`);
	logger.error(error);
}
