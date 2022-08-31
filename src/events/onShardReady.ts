import type { Snowflake } from "discord.js";
import logger from "../util/logger.js";

export default function onShardReady(id: number, unavailableGuilds?: Set<Snowflake>): void {
	if (typeof unavailableGuilds === "undefined") {
		logger.debug(`(onShardReady) Shard ID ${id} is ready. All Guilds are Available.`);
	} else {
		logger.debug(`(onShardReady) Shard ID ${id} is ready with ${unavailableGuilds.size} Unavailable Guilds.`);
	}
}
