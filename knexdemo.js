var env = process.env.NODE_ENV || 'development';
var knexConfig = require('./knexfile.js')[env];
var knex = require('knex')(knexConfig);

function log(it) {
  console.log(it);
}

function finish(err, result) {
  if (err)
    console.log(err);
  else {
    console.log(result);
  }
}
knex('countries').insert([{name: 'Xanadu'},{name: 'Oz'}]);
