import { readdirSync } from "fs";
import { Command } from "./Command";
import * as path from 'path';

let commands: Command[] = []

async function getCommands(): Promise<Command[]> {

    if (commands.length > 0) return commands

    const commandFiles = readdirSync(path.join(__dirname, 'commands')).filter(file => file.endsWith('.ts'))

    for (let file of commandFiles) {
        commands.push(await (await import(`./commands/${file}`)).default)
    }

    return commands
}

export default getCommands