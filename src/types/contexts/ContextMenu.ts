import type { ContextMenuCommandBuilder, ContextMenuCommandInteraction } from "discord.js";
import type Bot from "../Bot.js";
import type { TFunction } from "i18next";
import type { TFunctionCollection } from "../lang/TFunctionCollection.js";

export default interface ContextMenu {
	data?: ContextMenuCommandBuilder;
	init: (tFunctions: TFunctionCollection) => ContextMenuCommandBuilder;
	run: (bot: Bot, interaction: ContextMenuCommandInteraction, t: TFunction) => Promise<void>;
}
