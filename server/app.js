const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const app = express();
const router = require('./router/index');
const port = process.env.port || 8000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use(morgan('dev'));
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