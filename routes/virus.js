var express = require('express');
var router = express.Router();
var services = {
        "name":"Virus Removal",
        "description":"Consectetur adipiscing elit. Maecenas a mollis est, sed dapibus neque. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae",
        "price_range":"PHP 1000 - PHP 1500"
    };
/* GET home page. */
router.get('/', function(req, res, next) {
  var templateData = services;
  res.render('service', templateData);
});

module.exports = router;
