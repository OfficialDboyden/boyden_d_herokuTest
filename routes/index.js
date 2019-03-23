var express = require('express');
var router = express.Router();

const data = require('../data');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Welcome', message: 'This app is for the viewing of the new apple ipad air. you cann view the product in the nav below.' });
});

// get dynamic user via router parameter
router.get('/:user', function(req, res, next) {
  console.log('user:', data[req.params.user]);
  res.render('userpage', data[req.params.user]);
});


module.exports = router;
