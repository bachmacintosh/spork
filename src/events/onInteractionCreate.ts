import type { Interaction, LocaleString } from "discord.js";
import type Bot from "../types/Bot.js";
import type { TFunction } from "i18next";

export default async function onInteractionCreate(bot: Bot, interaction: Interaction): Promise<void> {
	let lang: LocaleString = "en-US";
	if (interaction.guildLocale === null) {
		lang = interaction.locale;
	} else {
		lang = interaction.guildLocale;
	}
	if (typeof bot.translators["en-US"] === "undefined") {
		throw new Error("(onInteractionCreate) English localization was unavailable!");
	}
	let t = bot.translators["en-US"];
	if (typeof bot.translators[lang] !== "undefined") {
		t = bot.translators[lang] as TFunction;
	}

	if (interaction.isChatInputCommand()) {
		const command = bot.commands.find((item) => {
			if (typeof item.data === "undefined") {
				throw new Error("(onInteractionCreate) Command data was not properly defined!");
			} else {
				return item.data.name === interaction.commandName;
			}
		});
		if (typeof command === "undefined") {
			await interaction.reply(t("commands.notFound", { command: interaction.commandName }));
		} else {
			await command.run(bot, interaction, t);
		}
	}
}
