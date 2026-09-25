const bedrock = require('bedrock-protocol');
const express = require('express');

const app = express();
app.get('/', (req, res) => res.send('Bot is Online!'));
app.listen(process.env.PORT || 3000);

function startBot() {
  const client = bedrock.createClient({
    host: '136.243.83.105',
    port: 25494,
    username: 'GitHubAFKBot',
    offline: true
  });

  client.on('join', () => console.log('Bot joined the server!'));
  client.on('disconnect', () => setTimeout(startBot, 10000));
  client.on('error', (err) => console.log(err));
}

startBot();
