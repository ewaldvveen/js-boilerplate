/* eslint-disable no-console */

import express from 'express';
import path from 'path';
import open from 'open';
import webpack from 'webpack';
import config from '../webpack.config.dev';

const port = 3000;
const app = express();
const compiler = webpack(config);

app.use(
  require('webpack-dev-middleware')(compiler, {
    publicPath: config.output.publicPath,
  })
);

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '../src/index.html'));
});

app.get('/users', function(req, res) {
  // Faking a database
  res.json([
    {"id": 1, "firstName": "Lionel", "lastName": "Messi", "email": "lmessi@example.com"},
    {"id": 2, "firstName": "Cristiano", "lastName": "Ronaldo", "email": "cr7@example.com"},
    {"id": 3, "firstName": "Robert", "lastName": "Lewandowski", "email": "rlewandowski@example.com"},
  ]);
});

app.listen(port, function (err) {
  if (err) {
    console.log(err);
  } else {
    open(`http://localhost:${port}`);
  }
});
