const http = require('http');
const fs = require('fs');

http.createServer((req, res) => {
  if (req.url === "/") {
    fs.readFile("login.html", (err, data) => {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      return res.end();
    });
  }
}).listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});
