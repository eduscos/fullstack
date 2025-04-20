const http = require('http');
const fs = require('fs');

http.createServer((req, res) => {
  fs.readFile('elearning.html', (err, data) => {
    if (err) {
      res.writeHead(404);
      res.end("Page not found");
    } else {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(data);
    }
  });
}).listen(3000, () => {
  console.log("eLearning system running at http://localhost:3000");
});
