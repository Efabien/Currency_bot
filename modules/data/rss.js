const Feed = require('rss-to-json');
module.exports = (topic, callback) => {
	const map = {
		sports :'http://www.france24.com/fr/sports/rss',
		foot :'http://www.matchendirect.fr/rss/info.xml',
		actu :'http://www.france24.com/fr/actualites/rss',	
		eco :'http://www.france24.com/fr/eco-tech/rss'	,
		europe :'http://www.france24.com/fr/europe/rss' ,
		moyen_orient :'http://www.france24.com/fr/moyen-orient/rss',
		usa :'http://www.france24.com/fr/ameriques/rss',	
		africe :'http://www.france24.com/fr/afrique/rss',
		championsLeagueResult: 'http://www.soccerstats247.com/CompetitionFeed.aspx?langId=1&leagueId=1005'			
	}
	const url = map[topic];
Feed.load(url, (err, rss) => {
    if(err){
    	console.log(err)
    }else{
    	const raw = rss.items;
    	for (let i = 0; i < raw.length - 1; i++) {
    		if (raw[i].created === raw[i+1].created) raw[i+1].created ++;
    	}
    	callback(raw);
		}
});
}
