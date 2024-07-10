const express = require('express')
const { BaseClient } = require('@base-open/node-sdk');
const path = require('path');

const client = new BaseClient({
  appToken: process.env['appToken'],
  personalBaseToken: process.env['personalBaseToken'],
});
const app = express();
const port = 3000;

app.get('/', function(req, res) {
  res.send('ok');
});

app.get('/add_record', async function(req, res) {
  await client.base.appTableRecord.create({
    path: {
      table_id: process.env['tableId'],
    },
    data: {
      fields: new Map([]),
    },
  });
  res.send('ok');
});


app.listen(port, () => {
  // Code.....
});