import type Bot from "../../types/Bot.js";

export default async function countGuilds(bot: Bot): Promise<number> {
	const guildCount = await bot.db.sporkGuild.count();
	return guildCount;
}
