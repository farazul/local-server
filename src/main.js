// Farazul Hoda
// https://dev.to/farazul

const https = require('https');
const fs = require('fs');

const options = {
  key: fs.readFileSync('key.pem'),
  cert: fs.readFileSync('cert.pem')
};

https.createServer(options, function (req, res) {
  res.writeHead(200);
  res.end("Hello World, Server is up and running...\n");
}).listen(8000);
