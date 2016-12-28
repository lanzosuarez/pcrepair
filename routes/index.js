var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var templateData = {
    title: 'COE V1',
    name: 'Serjay Ilaga',
    description: 'About me',
    skills: 'node, npm, express, git, heroku',
    services: [
        {
            "name":"Hardware Repair",
            "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas a mollis est, sed dapibus neque. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae",
            "price_range":"PHP 1000 - PHP 2000",
            "link": '/hardware'
        },
        {
            "name":"Virus Removal",
            "description":"Consectetur adipiscing elit. Maecenas a mollis est, sed dapibus neque. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae",
            "price_range":"PHP 1000 - PHP 1500",
            "link": '/virus'
        },
        {
            "name":"Pc Tune Up",
            "description":"Adipiscing elit. Maecenas a mollis est, sed dapibus neque. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae",
            "price_range":"PHP 750 - PHP 1000",
            "link": '/tuneup'
        },
        {
            "name":"Network Services",
            "description":"Sed dapibus neque. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae",
            "price_range":"PHP 5000 - PHP 10000",
            "link": '/hardware'
        }
    ]
  };
  res.render('index', templateData);
});

module.exports = router;
