import type { Client } from "discord.js";
import logger from "../util/logger.js";

export default function onReady(client: Client): void {
	logger.debug("(onReady) Client connected and is ready to receive further instructions.");
	if (client.user !== null) {
		logger.debug(`(onReady) User: ${client.user.username}#${client.user.discriminator}`);
	}
}
