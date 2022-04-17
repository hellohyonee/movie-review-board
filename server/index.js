const express = require('express');
const app = express();
const cors = require('cors');
const port = 3000;

app.use(
  cors({
    origin: 'http://localhost:3000',
    credentials: true,
    methods: ['GET', 'POST', 'OPTIONS', 'DELETE'],
    maxAge: 3600
  })
);

app.use('/', router);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})