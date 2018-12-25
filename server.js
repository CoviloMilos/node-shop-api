const http = require('http');
const app = require('./app');

process.env.PORT = 8081;
const port = process.env.PORT || 3000;

const server = http.createServer(app);

server.listen(port);