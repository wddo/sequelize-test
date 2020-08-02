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
  crypto.randomBytes(64, (err, buf) => {
    const salt = buf.toString('base64')
    crypto.pbkdf2(req.body.password, salt, 108402, 64, 'sha512', (err, key) => {
      db.User.create({
        ...req.body,
        password: key.toString('base64'),
        salt,
      }).then(results => {
        res.json(results)
      })
    })
  })
});

router.post('/sign_in', function(req, res, next) {
  db.User.findOne({
    where: {
      email: req.body.email
    }
  }).then(results => {
    const salt = results.dataValues.salt

    crypto.pbkdf2(req.body.password, salt, 108402, 64, 'sha512', (err, key) => {
      if (key.toString('base64') === results.password) {
        res.cookie('user', results.dataValues.email, {
          expires: new Date(Date.now() + 900000), 
          httpOnly: true
        }).end()
      } else {
        throw 'error password'
      }
    })
  })
});

router.delete('/', function(req, res, next) {
  db.User.destroy({where: {email: req.body.email}}).then(results => {
    res.json(results)
  })
});

module.exports = router;
