const express = require('express');
const { resolve } = require('path');
const mongoose=require("mongoose")
require("dotenv").config()

const app = express();
const port = 3010;


mongoose.connect(process.env.mongodb)
  .then(() => console.log('Connected to database'))
  .catch((err) => console.error('Failed to connect:', err));


app.use(express.static('static'));

app.get('/', (req, res) => {
  res.sendFile(resolve(__dirname, 'pages/index.html'));
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
