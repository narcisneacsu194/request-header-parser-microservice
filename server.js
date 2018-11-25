require('./config/config.js');
const express = require('express');
const ip = require('public-ip');

const app = express();
const port = process.env.PORT || 3000;

app.get('/api/whoami', async (req, res) => {
  const acceptLanguageHeader = req.headers['accept-language'];
  const userAgentHeader = req.headers['user-agent'];
  const ipAddress = await ip.v4();
  const result = {
    ipaddress: ipAddress,
    language: acceptLanguageHeader,
    software: userAgentHeader,
  };

  return res.send(result);
});

app.listen(port, () => {
  console.log(`Server started up with port ${port}.`);
});

module.exports = { app };
