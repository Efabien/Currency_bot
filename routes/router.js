const express=require('express');
const router = express.Router(); 
const rss=require('../modules/data/rss.js');
const tool = require('../modules/managers/tool.js')

//defining routes
router.get('/',function(req,res){
	res.send('hello world');
});
router.get('/:topic/:action',function(req,res){	
	const topic = req.params.topic;
	const action = req.params.action;
	//checking topic and action
	if(!tool.checker(topic,['foot', 'actu', 'eco', 'europe', 'moyen-orient']) || !tool.checker(action,['fresh', 'next', 'getAll', 'random'])) res.send({'message':'wrong path'}); 
	rss(topic,function(result){
		switch (action){
			case 'fresh' :
				res.send(result[0]);
			break;
			case 'next' :
				for(let i=0;i<result.length;i++){
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
