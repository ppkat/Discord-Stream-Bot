import { Client } from "discord.js";
import eventHandle from "./eventHandle";
import { config } from "dotenv";
config()
const token = process.env.BOT_TOKEN

console.log("Bot is starting...");

const client = new Client({
    intents: [3276799]
});

eventHandle(client)

client.login(token);