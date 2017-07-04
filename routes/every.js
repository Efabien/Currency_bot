const rss = require('../modules/data/rss.js');

const chained = function (res, topics, index, hold) {
	if (index >= topics.length) {
		return res.send(hold);
	}
	rss(topics[index], function(result) {
		hold.push({ topic: topics[index], data: result});
			index++;
		 chained(res, topics, index, hold);
	});
}
module.exports = function(req, res) {
	const topics = ['sports', 'foot', 'actu', 'eco',
	'europe', 'moyen-orient', 'usa', 'africe'];
	const container = [];
	chained(res, topics, 1, container);
}