import type { ButtonBuilder, ButtonInteraction, ChatInputCommandInteraction } from "discord.js";
import type Bot from "../Bot.js";
import type { TFunction } from "i18next";

export default interface Button {
	data: ButtonBuilder;
	show: (bot: Bot, interaction: ChatInputCommandInteraction, t: TFunction) => Promise<void>;
	submit: (bot: Bot, interaction: ButtonInteraction, t: TFunction) => Promise<void>;
}
