import { Client } from "discord.js";
import { readdirSync } from 'fs';
import * as path from 'path';

export default async (c: Client) => {
    const eventFiles = readdirSync(path.join(__dirname, 'events')).filter((file) => file.endsWith('.ts'));

    for (const file of eventFiles) {
        const event = await import(`./events/${file}`);
        c.on(file.split('.')[0], (...args) => event.default(c, ...args));
    }
}