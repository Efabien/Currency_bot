var express=require('express');
var router = express.Router(); 
var rss=require('../data/rss.js');
var tool = require('../managers/tool.js')

//defining routes
router.get('/',function(req,res){
	res.send('hello world');
});
router.get('/fresh',function(req,res){
	rss(function(result){
		res.send(result[0]);
	});
});
router.get('/next',function(req,res){
	
	rss(function(result){
		
		for(var i=0;i<result.length;i++){
			if(result[i].created===parseInt(req.query.ref)){
				res.send(result[i+1]);
			}else if(i===result.length-1){
				res.send({"message":"no more info"});
			}
		}
	});
});
router.get('/getAll',function(req,res){
	rss(function(result){
		res.send(result);
	});
});
router.get('/random',function(req,res){
	rss(function(result){
		res.send(result[tool.random(0,result.length)]);
	});
});
exports.router=router;
