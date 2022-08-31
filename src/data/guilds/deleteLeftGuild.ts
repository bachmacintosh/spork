import type Bot from "../../types/Bot.js";
import type { Guild } from "discord.js";
import logger from "../../util/logger.js";

export default async function deleteLeftGuild(bot: Bot, guild: Guild): Promise<void> {
	try {
		await bot.db.sporkGuild.delete({
			where: {
				id: guild.id,
			},
		});
	} catch (error) {
		logger.warn(`(deleteLeftGuild) Could not find Guild ID ${guild.id} when trying to delete it.`);
	}
}
