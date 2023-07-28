const express = require('express');

const app = express();

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/app.html');
  // res.send('');
});

const port = 80;

app.listen(port, () => {
  console.log(`http://localhost:${port}/`);
});