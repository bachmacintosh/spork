import type Bot from "../types/Bot.js";
import { REST } from "@discordjs/rest";
import type { RESTPostAPIApplicationGuildCommandsJSONBody } from "discord.js";
import { Routes } from "discord.js";
import logger from "./logger.js";

export default async function reloadHomeGuildCommands(bot: Bot): Promise<void> {
	const rest = new REST({ version: "10" }).setToken(bot.config.discord.botToken);
	const guildCommands: RESTPostAPIApplicationGuildCommandsJSONBody[] = [];
	bot.commands.forEach((command) => {
		if (command.type === "guild") {
			if (typeof command.data === "undefined") {
				throw new Error("(registerHomeGuildCommands) Command data not fully initialized!");
			}
			logger.debug(command.data.toJSON());
			guildCommands.push(command.data.toJSON());
		}
	});
	logger.debug("(reloadHomeGuildCommands) Registering Home Commands...");
	if (guildCommands.length > 0) {
		try {
			await rest.put(Routes.applicationGuildCommands(bot.config.discord.appId, bot.config.discord.ownerGuild), {
				body: guildCommands,
			});
		} catch (error) {
			logger.warn(
				`(reloadHomeGuildCommands) Could not reload the Home Commands, likely due to Bot currently not being in Home Guild`,
			);
		}
	}
}
