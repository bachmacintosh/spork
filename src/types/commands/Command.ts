import type { ChatInputCommandInteraction, SlashCommandBuilder, SlashCommandSubcommandsOnlyBuilder } from "discord.js";
import type Bot from "../Bot.js";
import type { TFunction } from "i18next";
import type { TFunctionCollection } from "../lang/TFunctionCollection.js";

export default interface Command {
	data?: SlashCommandBuilder | SlashCommandSubcommandsOnlyBuilder;
	type: "global" | "guild";
	init: (tFunctions: TFunctionCollection) => SlashCommandBuilder | SlashCommandSubcommandsOnlyBuilder;
	run: (bot: Bot, interaction: ChatInputCommandInteraction, t: TFunction) => Promise<void>;
}
