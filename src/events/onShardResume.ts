import logger from "../util/logger.js";

export default function onShardResume(id: number, replayedEvents: number): void {
	logger.info(`(onShardResume) Shard ID ${id} resumed and replayed ${replayedEvents} events.`);
}
