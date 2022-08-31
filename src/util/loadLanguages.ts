import type { LocaleString } from "discord.js";
import type { TFunctionCollection } from "../types/lang/TFunctionCollection.js";
import enUSCommands from "../lang/en-US/commands.json" assert { type: "json" };
import i18next from "i18next";

function missingKey(lngs: readonly string[], ns: string, key: string): void {
	throw new Error(`Key ${ns}:${key} missing from translattion`);
}

export default async function loadLanguages(): Promise<TFunctionCollection> {
	const options: i18next.InitOptions = {
		fallbackLng: "en-US",
		ns: ["commands"],
		returnObjects: true,
		resources: { "en-US": { commands: enUSCommands } },
		saveMissing: true,
		missingKeyHandler: missingKey,
	};
	const i18nInstance = i18next.createInstance();
	await i18nInstance.init(options);
	const discordLocales: LocaleString[] = [
		"en-US",
		"en-GB",
		"bg",
		"zh-CN",
		"zh-TW",
		"hr",
		"cs",
		"da",
		"nl",
		"fi",
		"fr",
		"de",
		"el",
		"hi",
		"hu",
		"it",
		"ja",
		"ko",
		"lt",
		"no",
		"pl",
		"pt-BR",
		"ro",
		"ru",
		"es-ES",
		"sv-SE",
		"th",
		"tr",
		"uk",
		"vi",
	];
	const filteredLocales = discordLocales.filter((locale) => {
		return i18nInstance.languages.includes(locale);
	});
	if (filteredLocales.length === 0) {
		throw new Error("(loadLanguages) No compatible Discord Locales found in i18n!");
	}
	const tFunctions: TFunctionCollection = {};
	filteredLocales.forEach((language) => {
		tFunctions[language] = i18nInstance.getFixedT(language);
	});
	return tFunctions;
}
