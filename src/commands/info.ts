import type { APIEmbedField, LocaleString } from "discord.js";
import type Bot from "../types/Bot.js";
import type Command from "../types/commands/Command.js";
import { SlashCommandBuilder } from "discord.js";
import buildEmbed from "../embeds/buildEmbed.js";
import countGuilds from "../data/guilds/countGuilds.js";
import findOrCreateGuild from "../data/guilds/findOrCreateGuild.js";
import getUsage from "../random-dot-org/getUsage.js";
import setLocales from "../util/setLocales.js";

const info: Command = {
	init: (tFunctions) => {
		let builder = new SlashCommandBuilder().setDefaultMemberPermissions("0");
		for (const [key, t] of Object.entries(tFunctions)) {
			const locale = key as LocaleString;
			builder = setLocales(
				builder,
				locale,
				t(`commands.info.name`),
				t(`commands.info.description`),
			) as SlashCommandBuilder;
		}
		return builder;
	},
	run: async (bot: Bot, interaction, t) => {
		await interaction.deferReply({ ephemeral: true });
		if (interaction.guild === null) {
			await interaction.editReply(t("commands.info.noDirectMessage"));
		} else {
			const bitsLeftThreshold = 1000;
			const requestsLeftThreshold = 100;
			const sporkGuild = await findOrCreateGuild(bot, interaction.guild);
			const numberOfGuilds = await countGuilds(bot);
			let status: "error" | "info" | "warn" = "info";
			const fields: APIEmbedField[] = [];
			if (sporkGuild.randomizationMode === "Pseudorandom") {
				fields.push(
					{
						name: t("commands.info.status"),
						value: t("commands.info.statusOk"),
					},
					{
						name: t("commands.info.mode"),
						value: t("commands.info.modePseudorandom"),
					},
				);
			} else if (sporkGuild.randomApiKey === null) {
				status = "warn";
				fields.push(
					{
						name: t("commands.info.status"),
						value: t("commands.info.statusApiKeyMissing"),
					},
					{
						name: t("commands.info.mode"),
						value: t("commands.info.modeRandomUnavailable"),
					},
				);
			} else {
				try {
					const apiKeyStatus = await getUsage(sporkGuild.randomApiKey);
					if (typeof apiKeyStatus.result === "undefined") {
						status = "error";
						fields.push({
							name: t("commands.info.status"),
							value: t("commands.info.statusRandomDotOrgError"),
						});
					} else if (apiKeyStatus.result.status === "stopped") {
						status = "warn";
						fields.push(
							{
								name: t("commands.info.status"),
								value: t("commands.info.statusApiKeyStopped"),
							},
							{
								name: t("commands.info.mode"),
								value: t("commands.info.modeRandomUnavailable"),
							},
							{
								name: t("commands.info.bitsLeft"),
								value: new Intl.NumberFormat(interaction.locale).format(apiKeyStatus.result.bitsLeft),
							},
							{
								name: t("commands.info.requestsLeft"),
								value: new Intl.NumberFormat(interaction.locale).format(apiKeyStatus.result.requestsLeft),
							},
						);
					} else if (
						apiKeyStatus.result.bitsLeft < bitsLeftThreshold ||
						apiKeyStatus.result.requestsLeft < requestsLeftThreshold
					) {
						status = "warn";
						fields.push(
							{
								name: t("commands.info.status"),
								value: t("commands.info.statusApiKeyLow"),
							},
							{
								name: t("commands.info.mode"),
								value: t("commands.info.modeRandom"),
							},
							{
								name: t("commands.info.bitsLeft"),
								value: new Intl.NumberFormat(interaction.locale).format(apiKeyStatus.result.bitsLeft),
							},
							{
								name: t("commands.info.requestsLeft"),
								value: new Intl.NumberFormat(interaction.locale).format(apiKeyStatus.result.requestsLeft),
							},
						);
					} else if (apiKeyStatus.result.bitsLeft <= 0 || apiKeyStatus.result.requestsLeft <= 0) {
						status = "warn";
						fields.push(
							{
								name: t("commands.info.status"),
								value: t("commands.info.statusApiKeyExhausted"),
							},
							{
								name: t("commands.info.mode"),
								value: t("commands.info.modeRandomUnavailable"),
							},
							{
								name: t("commands.info.bitsLeft"),
								value: new Intl.NumberFormat(interaction.locale).format(apiKeyStatus.result.bitsLeft),
							},
							{
								name: t("commands.info.requestsLeft"),
								value: new Intl.NumberFormat(interaction.locale).format(apiKeyStatus.result.requestsLeft),
							},
						);
					} else {
						fields.push(
							{
								name: t("commands.info.status"),
								value: t("commands.info.statusOk"),
							},
							{
								name: t("commands.info.mode"),
								value: t("commands.info.modeRandom"),
							},
							{
								name: t("commands.info.bitsLeft"),
								value: new Intl.NumberFormat(interaction.locale).format(apiKeyStatus.result.bitsLeft),
							},
							{
								name: t("commands.info.requestsLeft"),
								value: new Intl.NumberFormat(interaction.locale).format(apiKeyStatus.result.requestsLeft),
							},
						);
					}
				} catch (error) {
					status = "error";
					fields.push({
						name: t("commands.info.status"),
						value: t("commands.info.statusRandomDotOrgError"),
					});
				}
			}

			const options = {
				title: t("commands.info.title"),
				description: t("commands.info.guilds", { count: numberOfGuilds }),
				status,
				fields,
			};

			const embed = buildEmbed(options).toJSON();
			await interaction.editReply({ embeds: [embed] });
		}
	},
	type: "global",
};

export default info;
