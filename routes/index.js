var express = require('express');
var router = express.Router();
var async = require('async');
var db = require('../dbconfig');

/* GET home page. */
router.get('/', async function(req, res, next) {
  var query = 'SELECT * FROM cassandra_table;';
  var data = await db.query(query);
  res.render('index', { title: JSON.stringify(data.rows, null, 2) });
});

module.exports = router;
