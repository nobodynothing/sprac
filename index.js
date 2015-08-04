
// node index.js
var pg = require('pg');
var settings = "postgres://localhost/test"; //var settings = "postgres://pcsstudent:password@localhost/test";
var id = process.argv[2];

if (process.argv.length <= 2) { return console.error('please provide an id to look up'); }

var client = new pg.Client(settings);
client.connect(function(err) {
  if(err)
    return console.error('could not connect to postgres', err);

  client.query('select * from countries where id = $1::int', [id], function(err, result) {
    if(err)
      return console.error('error running query', err);

    console.log('%j', result.rows[0]);

    client.end();
  });
});
