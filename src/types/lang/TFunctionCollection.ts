import type { LocaleString } from "discord.js";
import type { TFunction } from "i18next";

export type TFunctionCollection = Partial<Record<LocaleString, TFunction>>;
