import * as commands from "../commands/index.js";
import type Bot from "../types/Bot.js";
import type Command from "../types/commands/Command.js";
import logger from "./logger.js";

export default async function loadCommands(bot: Bot): Promise<Command[]> {
	const commandArray: Command[] = [];
	for (const [key, value] of Object.entries(commands)) {
		logger.debug(`(loadCommands) Adding ${key} command...`);
		value.data = value.init(bot.translators);
		commandArray.push(value);
	}
	return Promise.resolve(commandArray);
}
