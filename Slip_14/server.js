const http = require('http');
const port = 3000;

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end('<h1>Welcome to the Simple Node.js Web Server!</h1>');
});

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
