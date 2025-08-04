import { Client, GatewayIntentBits, AttachmentBuilder } from "discord.js";
import fetch from "node-fetch";
import dotenv from "dotenv";
import getRandomMessage from "./possum-messages.js";
import fs from "fs";

dotenv.config();

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent
  ],
});

const IMAGE = new AttachmentBuilder('./images/Possum.jpg'); // Use the correct extension
const CHANNEL_ID = process.env.DISCORD_CHANNEL_ID;
const URL = "https://possum-listener-9ick.onrender.com/mint.json";

async function sendDetonatorUpdate() {
  try {
    const res = await fetch(URL);
    const { lastMint } = await res.json();

    if (!lastMint) return;

    const now = new Date();
    const mintTime = new Date(lastMint);
    const diff = now - mintTime;

    const hours = Math.floor(diff / (1000 * 60 * 60));
    const minutes = Math.floor((diff / (1000 * 60)) % 60);

    const message = `⏰ It’s been **${hours}h ${minutes}m** since the last GEN2 mint!\n${getRandomMessage()}`;

    const channel = await client.channels.fetch(CHANNEL_ID);
    await channel.send({ content: message, files: [IMAGE] });
  } catch (err) {
    console.error("❌ Failed to send update:", err);
  }
}

// Send one immediately on bot start
client.once("ready", () => {
  console.log(`🟢 Logged in as ${client.user.tag}`);
  sendDetonatorUpdate();
});

// Every 3 hours
setInterval(sendDetonatorUpdate, 3 * 60 * 60 * 1000);

client.login(process.env.DISCORD_BOT_TOKEN);
