const http = require('http');
const port = process.env.PORT || 8080;
http.createServer((req, res) => res.end('Tailscale is running in the background!')).listen(port);
console.log(`Dummy server listening on port ${port}`);
