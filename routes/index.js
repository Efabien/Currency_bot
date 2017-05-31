const express=require('express');
const router = express.Router(); 
const feed = require('./feed');
const currency = require('./currency')

//defining routes
router.get('/',function(req,res){
	res.send('hello world');
});

//getting feed news
router.get('/feed/:topic/:action', feed);

//currency value
router.get('/value/:money', currency);

exports.router=router;
