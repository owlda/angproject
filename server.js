const http = require('http');
const server = http.createServer((request, response) => {
  response.end('request close');
});
server.listen(process.env.PORT || 3000);
