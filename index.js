const { parseAsync } = require('json2csv');
const writeCsv = require('./utils.js/write-csv');

const myJson = require('./src/input');
const fields = require('./src/fields');

const args = fields ? [myJson, { fields }] : [myJson];

parseAsync(...args)
  .then(csv => {
    writeCsv(csv)
      .then(res => console.log(res.message))
      .catch(err => console.log(err));
  })
  .catch(err => console.log(err));