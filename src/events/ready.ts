import { Client } from "discord.js";
import getCommands from "../Commands";

export default async (client: Client): Promise<void> => {
    if (!client.user || !client.application) {
        return;
    }

    await client.application.commands.set(await getCommands());

    console.log(`${client.user.username} is online`);
};