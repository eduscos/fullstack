const http = require('http');
const fs = require('fs');
const querystring = require('querystring');

const form = `
  <form method="POST">
    String 1: <input name="str1" /><br>
    String 2: <input name="str2" /><br>
    <button type="submit">Concatenate</button>
  </form>
`;

const server = http.createServer((req, res) => {
  if (req.method === 'POST') {
    let data = '';
    req.on('data', chunk => { data += chunk; });
    req.on('end', () => {
      const { str1, str2 } = querystring.parse(data);
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(`${form}<h2>Result: ${str1 + str2}</h2>`);
    });
  } else {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(form);
  }
});

server.listen(3000, () => console.log('Running at http://localhost:3000'));
