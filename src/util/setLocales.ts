import type { LocaleString, SharedNameAndDescription } from "discord.js";
import { ContextMenuCommandBuilder } from "discord.js";

export default function setLocales<T extends SharedNameAndDescription>(
	builder: ContextMenuCommandBuilder | T,
	locale: LocaleString,
	name: string,
	description: string,
): ContextMenuCommandBuilder | T {
	if (builder instanceof ContextMenuCommandBuilder) {
		if (locale === "en-US") {
			builder.setName(name);
		} else {
			builder.setNameLocalization(locale, name);
		}
	} else if (locale === "en-US") {
		builder.setName(name);
		builder.setDescription(description);
	} else {
		builder.setNameLocalization(locale, name);
		builder.setDescriptionLocalization(locale, description);
	}
	return builder;
}
