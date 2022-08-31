import type Bot from "../types/Bot.js";
import type { ChatInputCommandInteraction } from "discord.js";
import type Command from "../types/commands/Command.js";
import { SlashCommandBuilder } from "discord.js";
import type { TFunction } from "i18next";
import localizeLabels from "../util/localizeLabels.js";

const shutdown: Command = {
	init: (tFunctions) => {
		const command = new SlashCommandBuilder().setDefaultMemberPermissions(0);
		const builder = localizeLabels(command, tFunctions, "commands:shutdown");
		return builder as SlashCommandBuilder;
	},
	run: async (bot: Bot, interaction: ChatInputCommandInteraction, t: TFunction) => {
		await interaction.reply(t("commands:shutdown.reply"));
		bot.destroy();
	},
	type: "guild",
};

export default shutdown;
