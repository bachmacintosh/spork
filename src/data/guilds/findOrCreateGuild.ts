import type Bot from "../../types/Bot.js";
import type { Guild } from "discord.js";
import type { SporkGuild } from "@prisma/client";

export default async function findOrCreateGuild(bot: Bot, guild: Guild): Promise<SporkGuild> {
	const existingSporkGuild = await bot.db.sporkGuild.findUnique({
		where: {
			id: guild.id,
		},
	});
	if (existingSporkGuild === null) {
		const newSporkGuild = await bot.db.sporkGuild.create({
			data: {
				id: guild.id,
			},
		});
		return newSporkGuild;
	} else {
		return existingSporkGuild;
	}
}
