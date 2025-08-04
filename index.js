import { Client, GatewayIntentBits, AttachmentBuilder } from "discord.js";
import fetch from "node-fetch";
import dotenv from "dotenv";
import getRandomMessage from "./possum-messages.js";
import fs from "fs";

dotenv.config();

const client = new Client({
  intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent],
});

const { AttachmentBuilder } = require('discord.js');
const IMAGE = new AttachmentBuilder('./images/Possum.png'); // Make sure the path and filename are correct
const CHANNEL_ID = process.env.CHANNEL_ID;
const URL = "https://possum-listener-9ick.onrender.com/mint.json";

async function sendDetonatorUpdate() {
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
  channel.send({ content: message, files: [IMAGE] });
}

// Every 3 hours
setInterval(sendDetonatorUpdate, 3 * 60 * 60 * 1000);

// Send one immediately on bot start
client.once("ready", () => {
  console.log(`🟢 Logged in as ${client.user.tag}`);
  sendDetonatorUpdate();
});

client.login(process.env.DISCORD_TOKEN);
