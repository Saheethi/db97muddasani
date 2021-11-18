var express = require('express');
var router = express.Router();
var fan_controller = require('../controllers/fan'); 

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('fan', { title: 'Search Results Fan' });
});

/* GET detail fan page */ 
router.get('/detail', fan_controller.fan_view_one_Page); 

/* GET create fan page */ 
router.get('/create', fan_controller.fan_create_Page);
 
module.exports = router;

