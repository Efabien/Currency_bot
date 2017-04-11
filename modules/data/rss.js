var Feed = require('rss-to-json');
module.exports=function(callback){
Feed.load('http://www.matchendirect.fr/rss/info.xml', function(err, rss){
    if(err){
    	console.log(err)
    }else{
    callback(rss.items);
	}
});
}