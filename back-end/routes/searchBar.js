var express = require('express');
var searchBarCtrl = require('../controllers/searchBarCtrl');
var router = express.Router();

router.get('/',function(req,res,next) {
	// change to relative path
	res.sendfile('/Users/sangela/Desktop/Womxn20/front-end/heygaucho.html');
});

router.get('/search',function(req,res,next) {
	searchBarCtrl.filter(req,res,next);
	// res.send("search");
})

module.exports = router;