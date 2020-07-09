var express = require('express');
var router = express.Router();
var db = require('../src/db/models')
var debug = require('debug')('sequelize-test:log')

/* GET users listing. */
router.get('/', function(req, res, next) {
  db.User.findAll().then((results) => {
    res.json(results);
  })
});

router.post('/', function(req, res, next) {
  db.User.create({name: req.body.name}).then(results => {
    res.json(results)
  })
});

router.delete('/', function(req, res, next) {
  db.User.destroy({where: {id: req.body.id}}).then(results => {
    res.json(results)
  })
});

module.exports = router;
