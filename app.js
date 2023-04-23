const express = require('express');
const app = express();
const port = 8080, socketPort = 8888;

const WebSocket = require('ws');
const wss = new WebSocket.Server({
  port: socketPort,
  perMessageDeflate: false,
  verifyClient: function (info, done) {
    done();
  }
});

wss.on('connection', function connection(ws) {
  // WebSocket 연결이 이루어졌을 때 처리할 내용
  console.log(ws);
});

app.get('/', (req, res) => {
  res.send(`<div style='color: magenta;'>Hello, world!</div>`);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});