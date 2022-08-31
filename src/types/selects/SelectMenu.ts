import type { ChatInputCommandInteraction, SelectMenuBuilder, SelectMenuInteraction } from "discord.js";
import type Bot from "../Bot.js";
import type { TFunction } from "i18next";

export default interface SelectMenu {
	data: SelectMenuBuilder;
	show: (bot: Bot, interaction: ChatInputCommandInteraction, t: TFunction) => Promise<void>;
	update: (bot: Bot, interaction: SelectMenuInteraction, t: TFunction) => Promise<void>;
}
