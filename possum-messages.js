const messages = [
  "🔥 Another 3 hours... The countdown continues!",
  "⏳ Tick-tock… is someone gonna mint and stop this madness?",
  "💣 The detonator is live — who's brave enough to reset it?",
  "😱 The Possums are sweating… 3 more hours down.",
  "🧨 Time keeps ticking… will someone save the 50 possums?!",
  "💣 Detonator's ticking, and the possums are pacing.",
  "🐾 GEN2 ain't gonna mint itself, friend.",
  "😬 The possums are getting nervous… it's been a while.",
  "⏳ Boom boom clock still counting…",
  "🎯 Next mint triggers the timer. You gonna be that legend?",
  "👀 Tick… tick… where are the minters?",
  "🧨 Possum Prime says: someone better mint before this goes kaboom.",
  "🔥 It's been hours… this Detonators hungrier than ever.",
  "🎲 1 mint resets it all. High stakes. No pressure.",
  "🎩 Even the cool possums are sweating now. It's gettin' close.",
  "😴 Timer climbing. Minter sleeping?",
  "🚨 Possum Alert: we're in the danger zone… mint it or risk it.",
  "💀 Boom delay detected… reset needed.",
  "🦴 GEN2 wants to live. Somebody mint the next possum.",
  "😈 The Detonator *remembers*…",
  "🕰️ Its not just a countdown. Its a challenge.",
  "🐾 GEN2 mints = life. No mint = kaboom.",
  "🧪 Possum Scientists agree: this timer is unstable.",
  "☠️ Will it explode… or will you mint? Choose wisely.",
];

function getRandomMessage() {
  return messages[Math.floor(Math.random() * messages.length)];
}

export default getRandomMessage;