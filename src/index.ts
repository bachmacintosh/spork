import { ActivityType, Client, GatewayIntentBits, IntentsBitField, Options } from "discord.js";
import type Bot from "./types/Bot.js";
import type { ClientOptions } from "discord.js";
import countGuilds from "./data/guilds/countGuilds.js";
import { exit } from "process";
import handleEvents from "./events/handleEvents.js";
import loadCommands from "./util/loadCommands.js";
import loadLanguages from "./util/loadLanguages.js";
import logger from "./util/logger.js";
import reloadCommands from "./util/reloadCommands.js";
import validateDb from "./data/validateDb.js";
import validateEnvironment from "./util/validateEnvironment.js";

const EXIT_ERROR_CODE = 255;

if (typeof process.env.npm_package_version === "undefined") {
	logger.info("Spork -- Version <unknown>");
} else {
	logger.info(`Spork -- Version ${process.env.npm_package_version}`);
}

logger.debug("(index) Starting up the Bot process...");

const intents = new IntentsBitField();
intents.add([GatewayIntentBits.Guilds]);

const options: ClientOptions = {
	intents,
	makeCache: Options.cacheWithLimits({
		MessageManager: 25,
	}),
	presence: {
		status: "online",
		afk: false,
		activities: [
			{
				name: "with an array of bytes",
				type: ActivityType.Playing,
			},
		],
	},
	sweepers: {
		messages: {
			interval: 3600,
			lifetime: 14400,
		},
		threads: {
			interval: 3600,
			lifetime: 14400,
		},
	},
};

const client = new Client(options) as Bot;

try {
	logger.debug("(index) Validating environment...");
	validateEnvironment(client);
	logger.debug("(index) Loading Languages...");
	client.translators = await loadLanguages();
	logger.debug("(index) Loading Commands...");
	client.commands = await loadCommands(client);
	if (process.argv.includes("reload")) {
		logger.debug("(index) Reloading Commands...");
		await reloadCommands(client);
		exit(0);
	}
	logger.debug("(index) Validating DB Connection...");
	await validateDb(client);
	logger.debug("(index) Counting Guilds...");
	const guilds = await countGuilds(client);
	logger.debug(`Number of Guilds: ${guilds}`);
} catch (error) {
	logger.fatal(error);
	exit(EXIT_ERROR_CODE);
}

handleEvents(client);

logger.debug("(index) Logging into Discord...");
await client.login(process.env.DISCORD_BOT_TOKEN);
