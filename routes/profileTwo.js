var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var templateData = {
    title: 'COE V1',
    name: 'Rish Joy',
    description: 'About me',
    skills: 'javascript, css, html5'
  };
  res.render('lesson', templateData);
});

module.exports = router;
