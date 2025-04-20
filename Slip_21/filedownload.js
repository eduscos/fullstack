// fileDownload.js
const express = require('express');
const app = express();
const PORT = 3000;

app.get('/download', (req, res) => {
  res.download(__dirname + '/sample.txt'); // make sure sample.txt exists
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
