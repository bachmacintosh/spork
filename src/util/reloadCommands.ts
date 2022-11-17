import type Bot from "../types/Bot.js";
import { REST } from "@discordjs/rest";
import type { RESTPostAPIApplicationCommandsJSONBody } from "discord.js";
import { Routes } from "discord.js";
import logger from "./logger.js";
import reloadHomeGuildCommands from "./reloadHomeGuildCommands.js";

export default async function reloadCommands(bot: Bot): Promise<void> {
	const rest = new REST({ version: "10" }).setToken(bot.config.discord.botToken);
	const globalCommands: RESTPostAPIApplicationCommandsJSONBody[] = [];
	bot.commands.forEach((command) => {
		if (command.type === "global") {
			if (typeof command.data === "undefined") {
				throw new Error("(registerCommands) Command data not fully initialized!");
			}
			logger.debug(command.data.toJSON());
			globalCommands.push(command.data.toJSON());
		}
	});
	logger.debug("(registerCommands) Registering Global Commands...");
	if (globalCommands.length > 0) {
		await rest.put(Routes.applicationCommands(bot.config.discord.appId), { body: globalCommands });
	}
	logger.debug("(registerCommands) Registering Guild Commands...");
	await reloadHomeGuildCommands(bot);
}
