import type Bot from "../types/Bot.js";
import onGuildCreate from "./onGuildCreate.js";
import onGuildDelete from "./onGuildDelete.js";
import onInteractionCreate from "./onInteractionCreate.js";
import onReady from "./onReady.js";
import onShardDisconnect from "./onShardDisconnect.js";
import onShardError from "./onShardError.js";
import onShardReady from "./onShardReady.js";
import onShardReconnecting from "./onShardReconnecting.js";
import onShardResume from "./onShardResume.js";

export default function handleEvents(client: Bot): void {
	client.on("guildCreate", async (guild) => {
		await onGuildCreate(client, guild);
	});
	client.on("guildDelete", async (guild) => {
		await onGuildDelete(client, guild);
	});
	client.on("interactionCreate", async (interaction) => {
		await onInteractionCreate(client, interaction);
	});
	client.on("ready", (readyClient) => {
		onReady(readyClient);
	});
	client.on("shardDisconnect", (closeEvent, id) => {
		onShardDisconnect(closeEvent, id);
	});
	client.on("shardError", (error, id) => {
		onShardError(error, id);
	});
	client.on("shardReady", (id, unavailableGuilds) => {
		onShardReady(id, unavailableGuilds);
	});
	client.on("shardReconnecting", (id) => {
		onShardReconnecting(id);
	});
	client.on("shardResume", (id, replayedEvents) => {
		onShardResume(id, replayedEvents);
	});

	// TODO: Handle guildCreate and guildDelete
}
