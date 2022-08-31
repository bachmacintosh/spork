import type Bot from "../../types/Bot.js";
import type { Guild } from "discord.js";
import { RandomizationMode } from "@prisma/client";
import logger from "../../util/logger.js";

export default async function upsertJoinedGuild(bot: Bot, guild: Guild): Promise<void> {
	await bot.db.sporkGuild.upsert({
		where: { id: guild.id },
		create: {
			id: guild.id,
		},
		update: {
			randomizationMode: RandomizationMode.Pseudorandom,
			randomApiKey: null,
		},
	});
	logger.debug(`(upsertJoinedGuild) Upserted new Guild with ID ${guild.id}`);
}
