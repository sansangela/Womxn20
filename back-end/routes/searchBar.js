var express = require('express');
// var searchBarCtrl = require('../controllers/searchBarCtrl');
var router = express.Router();

router.get('/',function(req,res,next) {
	// searchBarCtrl.filter(req,res,next);
	res.send("success!");
});

module.exports = router;