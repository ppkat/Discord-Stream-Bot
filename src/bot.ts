import { Client } from "discord.js";
import interactionCreate from "./listeners/interactionCreate";
import ready from "./listeners/ready";
import { config } from "dotenv";
config()
const token = process.env.BOT_TOKEN

console.log("Bot is starting...");

const client = new Client({
    intents: [3276799]
});

ready(client);
interactionCreate(client);

client.login(token);