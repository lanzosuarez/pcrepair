var express = require('express');
var router = express.Router();
var services = {
        "name":"Hardware Repair",
        "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas a mollis est, sed dapibus neque. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae",
        "price_range":"PHP 1000 - PHP 2000"
    };
/* GET home page. */
router.get('/', function(req, res, next) {
  var templateData = services;
  res.render('service', templateData);
});

module.exports = router;
