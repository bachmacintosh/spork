import type { CloseEvent } from "discord.js";
import logger from "../util/logger.js";

export default function onShardDisconnect(event: CloseEvent, id: number): void {
	logger.warn(`(onShardDisconnect) Shard ID ${id} disconnected. Code ${event.code}: ${event.reason}`);
}
