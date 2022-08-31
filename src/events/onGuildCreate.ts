import type Bot from "../types/Bot.js";
import type { Guild } from "discord.js";
import reloadHomeGuildCommands from "../util/reloadHomeGuildCommands.js";
import upsertJoinedGuild from "../data/guilds/upseretJoinedGuild.js";

export default async function onGuildCreate(bot: Bot, guild: Guild): Promise<void> {
	await upsertJoinedGuild(bot, guild);
	if (guild.id === bot.config.discord.ownerGuild) {
		await reloadHomeGuildCommands(bot);
	}
}
