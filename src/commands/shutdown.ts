import type { ChatInputCommandInteraction, LocaleString } from "discord.js";
import type Bot from "../types/Bot.js";

import type Command from "../types/commands/Command.js";
import { SlashCommandBuilder } from "discord.js";
import type { TFunction } from "i18next";
import setLocales from "../util/setLocales.js";

const shutdown: Command = {
	init: (tFunctions) => {
		let builder = new SlashCommandBuilder().setDefaultMemberPermissions(0);
		for (const [key, t] of Object.entries(tFunctions)) {
			const locale = key as LocaleString;
			builder = setLocales(
				builder,
				locale,
				t(`commands.shutdown.name`),
				t(`commands.shutdown.description`),
			) as SlashCommandBuilder;
		}
		return builder;
	},
	run: async (bot: Bot, interaction: ChatInputCommandInteraction, t: TFunction) => {
		await interaction.reply(t("commands.shutdown.reply"));
		bot.destroy();
	},
	type: "guild",
};

export default shutdown;
