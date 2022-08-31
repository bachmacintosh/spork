import type Bot from "../types/Bot.js";
import type { Guild } from "discord.js";
import deleteLeftGuild from "../data/guilds/deleteLeftGuild.js";
import logger from "../util/logger.js";

export default async function onGuildDelete(bot: Bot, guild: Guild): Promise<void> {
	logger.debug("(onGuildDelete) Bot left a Guild, removing from DB...");
	await deleteLeftGuild(bot, guild);
}
