var express = require('express');
var router = express.Router();
var db = require('../src/db/models')
var debug = require('debug')('sequelize-test:log')

const crypto = require('crypto');

/* GET users listing. */
router.get('/', function(req, res, next) {
  db.User.findAll().then((results) => {
    res.json(results);
  })
});

router.post('/sign_up', function(req, res, next) {
  const salt = Math.round((new Date().valueOf() * Math.random())) + ''
  const hashPw = crypto.createHash('sha512').update(req.body.pw + salt).digest('hex')

  db.User.create({
    ...req.body,
    password: hashPw,
    salt,
  }).then(results => {
    res.json(results)
  })
});

router.post('/sign_in', function(req, res, next) {
  db.User.findOne({
    where: {
      email: req.body.email
    }
  }).then(results => {
    const salt = results.dataValues.slat
    const hashPw = crypto.createHash('sha512').update(req.body.pw + salt).digest('hex')
    debug(hashPw)
    debug(results.dataValues.password)
    if (hashPw === results.dataValues.password) {
      res.send(req.body.email)
    } else {
      throw 'error password'
    }
  })
});

router.delete('/', function(req, res, next) {
  db.User.destroy({where: {email: req.body.email}}).then(results => {
    res.json(results)
  })
});

module.exports = router;
