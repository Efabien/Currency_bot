var express=require('express');
var router = express.Router(); 
var rss=require('../modules/data/rss.js');
var tool = require('../modules/managers/tool.js')

//defining routes
router.get('/',function(req,res){
	res.send('hello world');
});
router.get('/:topic/:action',function(req,res){
	
	
	rss(req.params.topic,function(result){
		switch (req.params.action){
			case 'fresh' :
				res.send(result[0]);
			break;
			case 'next' :
				for(var i=0;i<result.length;i++){
					if(result[i].created===parseInt(req.query.ref)){
						res.send(result[i+1]);
					}else if(i===result.length-1){
						res.send({"message":"no more info"});
					}
				}	
			break;
			case 'getAll' :
				res.send(result);
			break;
			case 'random' :
				res.send(result[tool.random(0,result.length)]);
			break;			
		}
	})
});
exports.router=router;
