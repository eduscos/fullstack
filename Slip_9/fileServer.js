const http = require('http');
const fs = require('fs');
const url = require('url');

const server = http.createServer((req, res) => {
  const pathname = url.parse(req.url).pathname;
  const filename = pathname === '/' ? 'index.html' : pathname.substring(1);

  fs.readFile(filename, (err, data) => {
    if (err) {
      res.writeHead(404, { 'Content-Type': 'text/html' });
      res.end('<h1>404 File Not Found</h1>');
    } else {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(data);
    }
  });
});

server.listen(3000, () => console.log('Server running at http://localhost:3000'));
