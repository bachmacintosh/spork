import type {
	ChatInputCommandInteraction,
	SlashCommandSubcommandBuilder,
	SlashCommandSubcommandGroupBuilder,
} from "discord.js";
import type Bot from "../Bot.js";
import type { TFunction } from "i18next";
import type { TFunctionCollection } from "../lang/TFunctionCollection.js";

export default interface SubCommand {
	init: (tFunctions: TFunctionCollection) => SlashCommandSubcommandBuilder | SlashCommandSubcommandGroupBuilder;
	run: (bot: Bot, interaction: ChatInputCommandInteraction, t: TFunction) => Promise<void>;
}
