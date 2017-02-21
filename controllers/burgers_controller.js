var express = require('express')
var burgers = require('../models/burger.js')
var router = express.Router()

router.get('/', function(req, res) {
	burgers.all(function(data) {
		res.render('index', {burgers: data})
	})
})

router.post('/', function(req, res) {
	burgers.create(
		[req.body.burgerName],
		function(result) {console.log(result)}
	)
	res.redirect('/');
})

router.put('/:id', function(req, res) {
	burgers.update(
		{devoured: true},
		req.params.id,
		function(result) {console.log(result)}
	)
	res.redirect('/');
})

module.exports = router;