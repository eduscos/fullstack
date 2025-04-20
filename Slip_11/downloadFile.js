const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send(`<a href="/download">Download File</a>`);
});

app.get('/download', (req, res) => {
  res.download(__dirname + '/sample.txt'); // Make sure sample.txt exists
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
