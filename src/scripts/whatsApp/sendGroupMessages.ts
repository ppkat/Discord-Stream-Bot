import getReadyClient from "./clientInicialization";
import * as discord from "discord.js";

export default async function sendGroupMessage(message: discord.Message, groupName: string) {
    const c = await getReadyClient()

    const grupinho = (await c.getChats()).find(chat => chat.name === groupName)
    await grupinho?.sendMessage(`🤖*${message.author.username}:* ${message.content}`)
}