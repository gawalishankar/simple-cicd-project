const express = require('express');
const app = express();
const port = 5000;

app.get('/api/hello', (req, res) => {
  res.send('Hello from Backend API!');
});

app.listen(port, () => {
  console.log(`Backend running on port ${port}`);
});
