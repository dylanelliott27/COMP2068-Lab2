var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/kenneth', function(req, res, next) {
  res.render('kenneth', { info: 'Kenneth is my father. He is from Toronto.' });
});

router.get('/michelle', function(req, res, next) {
  res.render('michelle', { info: 'Michelle is my mom.' });
});

router.get('/justin', function(req, res, next) {
  res.render('justin', { info: 'Justin is my brother' });
});

module.exports = router;
