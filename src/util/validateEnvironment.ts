import type Bot from "../types/Bot.js";
import logger from "./logger.js";

export default function validateEnvironment(bot: Bot): void {
	if (typeof process.env.DATABASE_URL === "undefined") {
		throw new Error("(validateEnvironment) Database Connection String not present in environment!");
	}
	if (typeof process.env.DISCORD_APP_ID === "undefined") {
		throw new Error("(validateEnvironment) Discord App ID not present in environment!");
	}
	if (typeof process.env.DISCORD_BOT_TOKEN === "undefined") {
		throw new Error("(validateEnvironment) Discord Bot Token not present in environment!");
	}
	if (typeof process.env.DISCORD_OWNER_ID === "undefined") {
		throw new Error("(validateEnvironment) Discord Owner ID not present in environment!");
	}
	if (typeof process.env.DISCORD_OWNER_GUILD === "undefined") {
		throw new Error("(validateEnvironment) Discord Owner Guild not present in environment!");
	}
	if (typeof process.env.DISCORD_WEBHOOK_URL === "undefined") {
		throw new Error("(validateEnvironment) Discord Webhook URL not present in environment!");
	}
	const logLevels = ["fatal", "error", "warn", "info", "debug", "trace", "silent"];
	if (typeof process.env.LOG_LEVEL === "undefined") {
		logger.info("(validateEnvironment) the Log Level has not been set in the environment, defaulting to Info level.");
	} else if (!logLevels.includes(process.env.LOG_LEVEL)) {
		throw new Error("(validateEnvironment) Log Level is not set to a valid value!");
	}

	bot.config = {
		discord: {
			appId: process.env.DISCORD_APP_ID,
			botToken: process.env.DISCORD_BOT_TOKEN,
			ownerId: process.env.DISCORD_OWNER_ID,
			ownerGuild: process.env.DISCORD_OWNER_GUILD,
			webhookUrl: process.env.DISCORD_WEBHOOK_URL,
		},
	};
}
