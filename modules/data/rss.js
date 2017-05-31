const Feed = require('rss-to-json');
module.exports=function(topic,callback){
	let url;
	switch (topic) {
		case 'sports' :
			url = 'http://www.france24.com/fr/sports/rss';
			break;
		case 'foot' :
			url = 'http://www.matchendirect.fr/rss/info.xml';
			break;
		case 'actu' :
			url = 'http://www.france24.com/fr/actualites/rss';
			break;	
		case 'eco' :
			url = 'http://www.france24.com/fr/eco-tech/rss'	;
			break;
		case 'europe' :
			url = 'http://www.france24.com/fr/europe/rss' ;
			break;
		case 'moyen-orient' :
			url = 'http://www.france24.com/fr/moyen-orient/rss';
			break;
		case 'usa' :
			url = 'http://www.france24.com/fr/ameriques/rss';
			break;	
		case 'africe' :
			url ='http://www.france24.com/fr/afrique/rss';
			break;			
	}
Feed.load(url, function(err, rss){
    if(err){
    	console.log(err)
    }else{
    callback(rss.items);
	}
});
}
