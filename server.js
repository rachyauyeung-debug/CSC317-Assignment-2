const express = require('express');
const app = express();
const port = 3000;

var path = require('path');
var StaticDirectory = path.join(__dirname, 'public');
app.use(express.static(StaticDirectory));

app.get('/hello', (req, res) => {
  res.send('hello');
});

app.get('/there', (req, res) => {
  res.send("there!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});