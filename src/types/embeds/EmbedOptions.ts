import type { APIEmbedField } from "discord.js";

export default interface EmbedOptions {
	title: string;
	description: string;
	fields: APIEmbedField[];
	status: "error" | "info" | "success" | "warn";
}
