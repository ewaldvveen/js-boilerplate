/* eslint-disable no-console */

import express from 'express';
import path from 'path';
import open from 'open';
import compression from 'compression';

const port = 3000;
const app = express();

app.use(compression());
app.use(express.static('dist'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});

app.get('/users', function (req, res) {
  // Faking a database
  res.json([
    {
      id: 1,
      firstName: 'Lionel',
      lastName: 'Messi',
      email: 'lmessi@example.com',
    },
    {
      id: 2,
      firstName: 'Cristiano',
      lastName: 'Ronaldo',
      email: 'cr7@example.com',
    },
    {
      id: 3,
      firstName: 'Robert',
      lastName: 'Lewandowski',
      email: 'rlewandowski@example.com',
    },
  ]);
});

app.listen(port, function (err) {
  if (err) {
    console.log(err);
  } else {
    open(`http://localhost:${port}`);
  }
});
