const rss=require('../modules/data/rss.js');
const createId = require('../modules/data/createId');

module.exports = (req,res) => {	
	const topic = req.params.topic;
	const action = req.params.action;
	const id = req.query.id;
	const limit = parseInt(req.query.limit) || 1;
		rss(topic, (result) => {
			result = createId(result);
			switch (action){
				case 'fresh' :
					let toSend = result.slice(0, limit);
					if (toSend.length === 1) toSend = toSend[0];
					res.send(toSend);
				break;
				case 'next' :
					const foundItem = result.find((item, index, array) => {
						if (item.id === id) return array[index + 1] || { error: 'No more news' };
					});
					res.send(foundItem);
				break;
				case 'getAll' :
					res.send(result);
				break;
					case 'random' :
					res.send(result[tool.random(0,result.length)]);
				break;
					case 'byId' :
					res.send(result.find(item => item.id === id ));
				break;			
			}
		})
};
