const rss=require('../modules/data/rss');
const tool = require('../modules/managers/tool');

module.exports = (req, res) => {
	rss('championsLeagueResult', raw => {
		let result = raw.map(data => {
			const match = {};
			match.containders = data.title.split(' v ');
			const description = data.description.replace(/<br\/>.+/, '');
			const rawCouples = description.split(' - ');
			const couples = rawCouples.map((couple) => {
				return {
					team: couple.match(/[a-zA-Z]+/)[0],
					points: parseInt(couple.match(/[0-9]+/))
				}
			});
			couples.sort((a, b) => {
				if (a.points > b.points) return -1;
				if (a.points < b.points) return 1;
				return 0;
			});
			match.winner = couples[0].points !== couples[1].points ? couples[0].team : undefined ;
			match.score = description.match(/[0-9]+ - [0-9]+/)[0];
			match.date = data.created;
			return match;
		});

		// by containders
		const containder1 = tool.upperCaseFirst(req.query.containder1);
		const containder2 = tool.upperCaseFirst(req.query.containder2);
		if (containder1 && containder2) {
			result = result.filter(match => {
				return (match.containders.indexOf(containder1) > -1 && match.containders.indexOf(containder2));
			});
		}

		const playedBy = tool.upperCaseFirst(req.query.playedBy);
		if (playedBy) {
			result = result.filter(match => {
				return match.containders.indexOf(playedBy) > -1;
			});
		}
		result.sort((a, b) => {
			if (a.date > b.date) return -1;
					if (a.date < b.date) return 1;
					return 0;	
		});
		res.send(result);
	});
}