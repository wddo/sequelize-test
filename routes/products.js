var express = require('express');
var router = express.Router();
var db = require('../src/db/models')
var debug = require('debug')('sequelize-test:log')

/* GET products listing. */
router.get('/', function(req, res) {
  db.Product.findAll().then((results) => {
    res.json(results)
  });
});

module.exports = router;
