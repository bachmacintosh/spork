import logger from "../util/logger.js";

export default function onShardReconnecting(id: number): void {
	logger.info(`(onShardReconnecting) Shard ID ${id} is attempting to reconnect to Discord...`);
}
