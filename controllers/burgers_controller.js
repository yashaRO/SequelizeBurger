var express = require('express')
var db = require('../models')
var router = express.Router()

router.get('/', function(req, res) {
	db.burgers.findAll().then(function(dbPosts) {
    res.render('index', {burgers:dbPosts})
  })
})

router.post('/', function(req, res) {
  db.burgers.create({
    id: null,
    burger_name: req.body.burgerName,
    devoured: false
  })
    .then(res.redirect('/'));
	
})

router.put('/:id', function(req, res) {
  db.burgers.update({
    devoured: true
  }, {
    where: {
      id: req.params.id
    }
  })
    .then(res.redirect('/'));
})

module.exports = router;