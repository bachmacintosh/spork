import { Colors, EmbedBuilder } from "discord.js";
import type EmbedOptions from "../types/embeds/EmbedOptions.js";

export default function buildEmbed(options: EmbedOptions): EmbedBuilder {
	const colors = {
		error: Colors.Red,
		info: Colors.Blue,
		success: Colors.Green,
		warn: Colors.Yellow,
	};
	let versionString = "?.?.?";
	if (typeof process.env.npm_package_version !== "undefined") {
		versionString = process.env.npm_package_version;
	}
	return new EmbedBuilder()
		.setTitle(options.title)
		.setDescription(options.description)
		.setColor(colors[options.status])
		.setFooter({ text: `Spork Version ${versionString}` })
		.addFields(options.fields);
}
