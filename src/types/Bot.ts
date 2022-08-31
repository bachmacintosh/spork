import type { Client, WebhookClient } from "discord.js";
import type Button from "./buttons/Button.js";
import type Command from "./commands/Command.js";
import type ContextMenu from "./contexts/ContextMenu.js";
import type Modal from "./modals/Modal.js";
import type { PrismaClient } from "@prisma/client";
import type SelectMenu from "./selects/SelectMenu.js";
import type { TFunctionCollection } from "./lang/TFunctionCollection.js";

export default interface Bot extends Client {
	config: {
		discord: {
			appId: string;
			botToken: string;
			ownerId: string;
			ownerGuild: string;
			webhookUrl: string;
		};
	};
	commands: Command[];
	contextMenus: ContextMenu[];
	db: PrismaClient;
	modals: Modal[];
	buttons: Button[];
	selectMenus: SelectMenu[];
	translators: TFunctionCollection;
	webhook: WebhookClient;
}
