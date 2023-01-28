import { Client, Message } from "discord.js";
import sendGroupMessage from "../scripts/whatsApp/sendGroupMessages";

export default async (client: Client, message: Message): Promise<void> => {
    if (message.author.bot) return
    if (message.channelId === '1068353294210191400') sendGroupMessage(message, 'grupinho')
}