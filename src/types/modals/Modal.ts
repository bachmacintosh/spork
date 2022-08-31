import type { ChatInputCommandInteraction, ModalSubmitInteraction } from "discord.js";
import type Bot from "../Bot.js";
import type { ModalBuilder } from "@discordjs/builders";
import type { TFunction } from "i18next";

export default interface Modal {
	data: ModalBuilder;
	show: (bot: Bot, interaction: ChatInputCommandInteraction, t: TFunction) => Promise<void>;
	submit: (bot: Bot, interaction: ModalSubmitInteraction, t: TFunction) => Promise<void>;
}
