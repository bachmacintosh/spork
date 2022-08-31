import type { LocaleString, SharedNameAndDescription } from "discord.js";
import { ContextMenuCommandBuilder } from "discord.js";
import type { TFunctionCollection } from "../types/lang/TFunctionCollection.js";

export default function localizeLabels<T extends SharedNameAndDescription>(
	builder: ContextMenuCommandBuilder | T,
	tFunctions: TFunctionCollection,
	keyPrefix: string,
): ContextMenuCommandBuilder | T {
	for (const [key, t] of Object.entries(tFunctions)) {
		const locale = key as LocaleString;
		if (builder instanceof ContextMenuCommandBuilder) {
			if (locale === "en-US") {
				builder.setName(t(`${keyPrefix}.name`));
			} else {
				builder.setNameLocalization(locale, t(`${keyPrefix}.name`));
			}
		} else if (locale === "en-US") {
			builder.setName(t(`${keyPrefix}.name`));
			builder.setDescription(t(`${keyPrefix}.description`));
		} else {
			builder.setDescriptionLocalization(locale, t(`${keyPrefix}.description`));
			builder.setNameLocalization(locale, t(`${keyPrefix}.name`));
		}
	}
	return builder;
}
