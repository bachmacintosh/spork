import type Bot from "../types/Bot.js";
import { PrismaClient } from "@prisma/client";

export default async function validateDb(bot: Bot): Promise<void> {
	const prisma = new PrismaClient();
	await prisma.$connect();
	bot.db = prisma;
}
